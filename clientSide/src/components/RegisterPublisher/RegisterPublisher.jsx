import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPublisher = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users/profile", {
          withCredentials: true,
        });
        setUser(res.data.user);
      } catch (error) {
        toast.error(
          error.response?.data?.message || "فشل في جلب بيانات المستخدم"
        );
      } finally {
        setLoading(false);
      }
    };
    fetchUserProfile();
  }, []);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("description", description);
      if (image) {
        formData.append("image", image);
      }

      await axios.put("http://localhost:5000/api/users/profileProf", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setDescription("");
      setImage(null);
      toast.success("تم إرسال الطلب بنجاح");
    } catch (error) {
      toast.error(error.response?.data?.message || "فشل في إرسال الطلب");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#51a31d]"></div>
        <span className="ml-4 text-[#383838] text-xl">جاري التحميل...</span>
      </div>
    );
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
      <div
        className="bg-[#f9f9fb] min-h-screen py-8 px-4 sm:px-6 lg:px-8"
        dir="rtl"
      >
        <div className="max-w-4xl mx-auto">
          {/* Card Container */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-[#51a31d] to-[#7585ff] px-6 py-8 text-center md:text-right">
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
                {/* User Image */}
                {user.profilePicture ? (
                  <img
                    src={`http://localhost:5000${user.profilePicture}`} // المسار الكامل للصورة
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
                {/* User Details */}
                <div className="mt-4 md:mt-0 md:mr-6 text-center md:text-right flex-grow">
                  <h1 className="text-2xl md:text-3xl font-bold text-white transition-colors duration-300 hover:text-[#f9f9fb]">
                    {user.name}
                  </h1>
                  <p className="text-blue-100">{user.email}</p>
                  <p className="text-white mt-2">الحالة: {user.role}</p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="p-6">
              {/* Personal Information */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-[#383838] mb-4">
                  المعلومات الشخصية
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#f9f9fb] p-4 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">
                    <label className="text-sm text-gray-500">الاسم</label>
                    <p className="font-medium text-[#383838]">{user.name}</p>
                  </div>
                  <div className="bg-[#f9f9fb] p-4 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">
                    <label className="text-sm text-gray-500">
                      البريد الإلكتروني
                    </label>
                    <p className="font-medium text-[#383838]">{user.email}</p>
                  </div>
                  <div className="bg-[#f9f9fb] p-4 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">
                    <label className="text-sm text-gray-500">الحالة</label>
                    <p className="font-medium text-[#383838]">{user.role}</p>
                  </div>
                </div>
              </div>

              {/* Request Form */}
              <div>
                <h2 className="text-xl font-semibold text-[#383838] mb-4">
                  إرسال طلب جديد
                </h2>
                <form onSubmit={handleSubmit}>
                  {/* Description Field */}
                  <div className="bg-[#f9f9fb] p-4 rounded-lg shadow-md mb-4 transition-shadow duration-300 hover:shadow-lg">
                    <label className="text-sm text-gray-500 block mb-1">
                      الشرح
                    </label>
                    <textarea
                      name="description"
                      value={description}
                      onChange={handleDescriptionChange}
                      rows="4"
                      className="w-full p-2 border border-[#7585ff] rounded-md bg-[#f9f9fb] focus:outline-none focus:border-[#51a31d]"
                      placeholder="أدخل الشرح هنا..."
                    />
                  </div>

                  {/* Image Upload Field */}
                  <div className="bg-[#f9f9fb] p-4 rounded-lg shadow-md mb-4 transition-shadow duration-300 hover:shadow-lg">
                    <label className="text-sm text-gray-500 block mb-1">
                      إرفاق صورة
                    </label>
                    <input
                      type="file"
                      name="image"
                      onChange={handleImageChange}
                      className="w-full p-2 border border-[#7585ff] rounded-md bg-[#f9f9fb] focus:outline-none focus:border-[#51a31d]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-[#7585ff] hover:bg-[#6a79e6] text-white px-6 py-2 rounded-lg transition-colors duration-300"
                    >
                      إرسال الطلب
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPublisher;
