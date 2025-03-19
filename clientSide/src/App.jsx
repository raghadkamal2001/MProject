import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import {
  Home,
  Navbar,
  AuthContainer,
  AdminDash,
  RegisterPublisher,
  ArticleCreationPage,
  ArticleDetailPage,
  BookmarkPage,
  CategoryPages,
  Profile,
  PublisherProfile,
  About,
  Contact,
  PaymentModal,
  Footer,
  AboutUsPage 
  
} from "./components";

function App() {
  return (
    <GoogleOAuthProvider clientId="708338751810-vs4526i07didjadt2vhqgrgu1vnr3ib8.apps.googleusercontent.com">
      <Router>
        <div className="App font-cairo">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/BookmarkPage" element={<BookmarkPage />} />
            <Route path="/auth/*" element={<AuthContainer />} />
            <Route path="/category/*" element={<CategoryPages />} />
            <Route path="/article/:id" element={<ArticleDetailPage />} />
            <Route path="/article/submit" element={<ArticleCreationPage />} />
         
            <Route path="/admin-dashboard" element={<AdminDash />} />
            <Route path="/register-publisher" element={<RegisterPublisher />} />
    
            <Route path="/article-detail" element={<ArticleDetailPage />} />

            <Route path="/category-pages" element={<CategoryPages />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/publisher-profile" element={<PublisherProfile />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/payment" element={<PaymentModal/>} />
          </Routes>
          <Footer />
        </div>

      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
