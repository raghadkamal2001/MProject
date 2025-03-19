import React, { useEffect, useState } from "react";
import axios from "axios";

const PublisherProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({
    name: "",
    email: "",
    profilePicture: "",
  });
  const [updateSuccess, setUpdateSuccess] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users/profile", {
          withCredentials: true,
        });
        setUser(res.data.user);
        setUpdatedUser({
          name: res.data.user.name,
          email: res.data.user.email,
          profilePicture: res.data.user.profilePicture,
        });
      } catch (error) {
        setError(error.response?.data?.message || "فشل في جلب بيانات المستخدم");
      } finally {
        setLoading(false);
      }
    };
    fetchUserProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        "http://localhost:5000/api/users/profile",
        updatedUser,
        {
          withCredentials: true,
        }
      );
      setUser(res.data.user);
      setIsEditing(false);
      setUpdateSuccess("تم تحديث المعلومات بنجاح");
      setTimeout(() => setUpdateSuccess(""), 3000);
    } catch (error) {
      setError(error.response?.data?.message || "فشل في تحديث المعلومات");
      setTimeout(() => setError(""), 3000);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/users/logout",
        {},
        {
          withCredentials: true,
        }
      );
      window.location.href = "/auth";
    } catch (error) {
      setError("فشل في تسجيل الخروج");
      setTimeout(() => setError(""), 3000);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl text-[#383838]">
          <svg
            className="animate-spin -ml-1 mr-3 h-8 w-8 text-[#51a31d]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          جاري التحميل...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div
          className="bg-[#383838] border border-[#51a31d] text-white px-4 py-3 rounded-lg relative"
          role="alert"
        >
          <span className="block sm:inline">{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-[#f9f9fb] min-h-screen py-8 px-4 sm:px-6 lg:px-8"
      dir="rtl"
    >
      <div className="max-w-4xl mx-auto">
        {updateSuccess && (
          <div
            className="bg-[#f9f9fb] border border-[#7585ff] text-[#383838] px-4 py-3 rounded-lg relative mb-4"
            role="alert"
          >
            <span className="block sm:inline">{updateSuccess}</span>
          </div>
        )}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* رأس الصفحة مع التدرج اللوني الجديد */}
          <div className="bg-gradient-to-r from-[#51a31d] to-[#7585ff] px-6 py-8">
            <div className="flex flex-col md:flex-row items-center">
              {user.profilePicture ? (
                <img
                  src={user.profilePicture}
                  alt="الصورة الشخصية"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-md object-cover"
                />
              ) : (
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-300 flex items-center justify-center border-4 border-white shadow-md">
                  <span className="text-4xl text-gray-600">
                    {user.name?.charAt(0).toUpperCase() || "؟"}
                  </span>
                </div>
              )}
              <div className="mt-4 md:mt-0 md:mr-6 text-center md:text-right flex-grow">
                <h1 className="text-2xl md:text-3xl font-bold text-white">
                  {user.name}
                </h1>
                <p className="text-blue-100">{user.email}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-[#7585ff] text-white rounded-full text-sm">
                  {user.role}
                </span>
              </div>
              <div className="mt-4 md:mt-0">
                <button
                  onClick={handleLogout}
                  className="bg-[#383838] hover:bg-[#2d2d2d] text-white px-4 py-2 rounded-lg transition-colors"
                >
                  تسجيل الخروج
                </button>
              </div>
            </div>
          </div>

          {/* معلومات المستخدم */}
          <div className="p-6">
            <div className="border-b border-gray-200 pb-4 mb-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  المعلومات الشخصية
                </h2>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="bg-[#51a31d] hover:bg-[#4a8c1c] text-white px-4 py-1 rounded-lg transition-colors text-sm"
                >
                  {isEditing ? "إلغاء" : "تعديل المعلومات"}
                </button>
              </div>
              {isEditing ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#f9f9fb] p-4 rounded-lg">
                      <label className="text-sm text-gray-500 block mb-1">
                        الاسم
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={updatedUser.name}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-[#7585ff] rounded-md bg-[#f9f9fb]"
                        required
                      />
                    </div>
                    <div className="bg-[#f9f9fb] p-4 rounded-lg">
                      <label className="text-sm text-gray-500 block mb-1">
                        البريد الإلكتروني
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={updatedUser.email}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-[#7585ff] rounded-md bg-[#f9f9fb]"
                        required
                      />
                    </div>
                    <div className="bg-[#f9f9fb] p-4 rounded-lg md:col-span-2">
                      <label className="text-sm text-gray-500 block mb-1">
                        رابط الصورة الشخصية
                      </label>
                      <input
                        type="url"
                        name="profilePicture"
                        value={updatedUser.profilePicture}
                        onChange={handleInputChange}
                        placeholder="https://example.com/image.jpg"
                        className="w-full p-2 border border-[#7585ff] rounded-md bg-[#f9f9fb]"
                      />
                      <small className="text-gray-500">
                        اترك الحقل فارغًا إذا كنت لا تريد تغيير الصورة
                      </small>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-[#7585ff] hover:bg-[#6a79e6] text-white px-6 py-2 rounded-lg transition-colors"
                    >
                      حفظ التغييرات
                    </button>
                  </div>
                </form>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#f9f9fb] p-4 rounded-lg">
                    <label className="text-sm text-gray-500">الاسم</label>
                    <p className="font-medium text-gray-800">{user.name}</p>
                  </div>
                  <div className="bg-[#f9f9fb] p-4 rounded-lg">
                    <label className="text-sm text-gray-500">
                      البريد الإلكتروني
                    </label>
                    <p className="font-medium text-gray-800">{user.email}</p>
                  </div>
                  <div className="bg-[#f9f9fb] p-4 rounded-lg">
                    <label className="text-sm text-gray-500">الدور</label>
                    <p className="font-medium text-gray-800">{user.role}</p>
                  </div>
                  <div className="bg-[#f9f9fb] p-4 rounded-lg">
                    <label className="text-sm text-gray-500">
                      تاريخ الإنشاء
                    </label>
                    <p className="font-medium text-gray-800">
                      {new Date(user.createdAt).toLocaleDateString("ar-EG")}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* المقالات المحفوظة */}
            <div className="border-b border-gray-200 pb-4 mb-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                المقالات المحفوظة
              </h2>
              {user.savedArticles && user.savedArticles.length > 0 ? (
                <div className="bg-[#f9f9fb] rounded-lg p-4">
                  <ul className="divide-y divide-gray-200">
                    {user.savedArticles.map((article, index) => (
                      <li key={index} className="py-3 flex items-center">
                        <div className="w-2 h-2 bg-[#7585ff] rounded-full mr-2"></div>
                        <span>{article}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="bg-[#f9f9fb] rounded-lg p-4 text-center text-gray-500">
                  لا توجد مقالات محفوظة.
                </div>
              )}
            </div>

            {/* التعليقات */}
            <div className="border-b border-gray-200 pb-4 mb-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                التعليقات
              </h2>
              {user.comments && user.comments.length > 0 ? (
                <div className="bg-[#f9f9fb] rounded-lg p-4">
                  <ul className="divide-y divide-gray-200">
                    {user.comments.map((comment, index) => (
                      <li key={index} className="py-3">
                        <p className="text-gray-700">{comment}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="bg-[#f9f9fb] rounded-lg p-4 text-center text-gray-500">
                  لا توجد تعليقات.
                </div>
              )}
            </div>

            {/* تاريخ القراءة */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                تاريخ القراءة
              </h2>
              {user.readingHistory && user.readingHistory.length > 0 ? (
                <div className="bg-[#f9f9fb] rounded-lg p-4">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {user.readingHistory.map((history, index) => (
                      <li
                        key={index}
                        className="flex items-center bg-white p-3 rounded shadow-sm"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-[#7585ff] ml-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{history}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="bg-[#f9f9fb] rounded-lg p-4 text-center text-gray-500">
                  لا توجد معلومات عن تاريخ القراءة.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherProfile;
