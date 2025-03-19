
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ArticleCreationPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    author: '',
    authorDescription: '',
    featuredImage: null,
    category: '',
    tags: [], 
    publishedDate: '',
    paragraph1: '',
    paragraph2: '',
    paragraph3Title: '',
    paragraph3: '',
    paragraph4Title: '',
    paragraph4: '',
    authorId: '', // إضافة حقل authorId
  });

  const [Id, setId] = useState('');  // لحفظ ID المستخدم

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'featuredImage') {
      setFormData((prevData) => ({ ...prevData, featuredImage: e.target.files[0] }));
    } else if (name === 'tags') {
      const tagsArray = value.split(" ").map((tag) => tag.trim());
      setFormData((prevData) => ({ ...prevData, [name]: tagsArray }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  useEffect(() => {
    const getUserId = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users/get-user", {
          withCredentials: true, // Important for sending cookies
        });
        setId(res.data.userId);
        setFormData((prevData) => ({ ...prevData, authorId: res.data.userId })); // تعيين authorId
        console.log("✅ User ID received:", res.data.userId);
      } catch (error) {
        console.error("❌ Error fetching user:", error.response?.data || error.message);
      }
    };
    getUserId();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      for (let key in formData) {
        if (key === 'tags') {
          formData.tags.forEach((tag, index) => {
            formDataToSend.append(`tags[${index}]`, tag); 
          });
        } else {
          formDataToSend.append(key, formData[key]);
        }
      }
      const response = await axios.post('http://localhost:5000/api/articles/submit', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      alert('تم إنشاء المقال بنجاح!');
    } catch (error) {
      console.error(error);
      alert('حدث خطأ أثناء إنشاء المقال.');
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 font-sans">
      {/* Header */}
      <div className="text-right mb-2">
        <h1 className="text-2xl font-bold text-[#51a31d]">إنشاء مقال جديد</h1>
        <p className="text-sm text-gray-600 mb-6">يرجى ملء البيانات التالية لإنشاء مقال جديد</p>
      </div>

      {/* Form Card */}
      <div className="border rounded-lg p-8 shadow-sm">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-[#51a31d]">معلومات المقال</h2>
          <p className="text-sm text-gray-600">املأ التفاصيل التالية لإنشاء مقال جديد</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* First Row - Title and Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-right mb-1 font-medium">عنوان المقال</label>
              <input
                type="text"
                name="title"
                className="w-full border rounded p-2 text-right"
                placeholder="عنوان المقال"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-right mb-1 font-medium">التصنيف</label>
              <select
                name="category"
                className="w-full border rounded p-2 text-right"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">اختر التصنيف</option>
                <option value="صحي">صحي</option>
                <option value="سياسي">سياسي</option>
                <option value="زراعي">زراعي</option>
              </select>
            </div>
          </div>

          {/* Second Row - Description and Tags */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-right mb-1 font-medium">الوصف العام</label>
              <textarea
                name="description"
                className="w-full border rounded p-2 text-right"
                placeholder="الوصف العام للمقال"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-right mb-1 font-medium">كلمات مفتاحية</label>
              <input
                type="text"
                name="tags"
                className="w-full border rounded p-2 text-right"
                placeholder="أدخل الوسوم مفصولة بمسافات"
                value={formData.tags.join(" ")}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Third Row - Author Name and Author Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-right mb-1 font-medium">اسم المؤلف</label>
              <input
                type="text"
                name="author"
                className="w-full border rounded p-2 text-right"
                placeholder="اسم المؤلف"
                value={formData.author}
                onChange={handleChange}
                required
                
              />
            </div>
            <div>
              <label className="block text-right mb-1 font-medium">وصف المؤلف</label>
              <textarea
                name="authorDescription"
                className="w-full border rounded p-2 text-right"
                placeholder="وصف المؤلف"
                value={formData.authorDescription}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Fourth Row - Featured Image and Publication Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-right mb-1 font-medium">رابط الصورة المميزة</label>
              <input
                type="file"
                name="featuredImage"
                className="w-full border rounded p-2 text-right"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-right mb-1 font-medium">تاريخ النشر المقرر</label>
              <input
                type="date"
                name="publishedDate"
                className="w-full border rounded p-2 text-right"
                value={formData.publishedDate}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Paragraphs Section */}
          <div className="pt-2">
            <h3 className="text-right text-gray-500">فقرات المقال</h3>
          </div>

          {/* Paragraph 1 and Paragraph 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-right mb-1 font-medium">الفقرة الأولى</label>
              <textarea
                name="paragraph1"
                className="w-full border rounded p-2 text-right"
                placeholder="نص الفقرة الأولى"
                value={formData.paragraph1}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-right mb-1 font-medium">الفقرة الثانية</label>
              <textarea
                name="paragraph2"
                className="w-full border rounded p-2 text-right"
                placeholder="نص الفقرة الثانية"
                value={formData.paragraph2}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Paragraph 3 Title and Paragraph 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-right mb-1 font-medium">عنوان الفقرة الثالثة</label>
              <input
                type="text"
                name="paragraph3Title"
                className="w-full border rounded p-2 text-right"
                placeholder="عنوان الفقرة الثالثة"
                value={formData.paragraph3Title}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-right mb-1 font-medium">نص الفقرة الثالثة</label>
              <textarea
                name="paragraph3"
                className="w-full border rounded p-2 text-right"
                placeholder="نص الفقرة الثالثة"
                value={formData.paragraph3}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Paragraph 4 Title and Paragraph 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-right mb-1 font-medium">عنوان الفقرة الرابعة</label>
              <input
                type="text"
                name="paragraph4Title"
                className="w-full border rounded p-2 text-right"
                placeholder="عنوان الفقرة الرابعة"
                value={formData.paragraph4Title}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-right mb-1 font-medium">نص الفقرة الرابعة</label>
              <textarea
                name="paragraph4"
                className="w-full border rounded p-2 text-right"
                placeholder="نص الفقرة الرابعة"
                value={formData.paragraph4}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-[#51a31d] hover:bg-[#69696d] text-white px-10 py-2 rounded-full font-medium transition duration-200"
            >
              إرسال
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ArticleCreationPage;
