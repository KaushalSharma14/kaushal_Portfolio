# 📧 EmailJS Setup Guide for Your Portfolio

## 🚀 **Complete Setup in 5 Minutes!**

### **Step 1: Create EmailJS Account**
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" (top right)
3. Use your email: `kaushalmdw@gmail.com`
4. Create password and verify email

### **Step 2: Add Gmail Service**
1. Login to EmailJS dashboard
2. Click "Add New Service"
3. Choose "Gmail"
4. Click "Connect Account"
5. Sign in with your Gmail
6. **Copy Service ID** (looks like: `service_abc123`)

### **Step 3: Create Email Template**
1. Click "Email Templates" → "Create New Template"
2. **Template Name**: `Portfolio Contact Form`
3. **Subject**: `New Portfolio Message from {{user_name}}`
4. **Content**:
```
Hello Kaushal,

You have received a new message from your portfolio website:

👤 **Name:** {{user_name}}
📧 **Email:** {{user_email}}
💬 **Message:** {{message}}

---
This message was sent from your portfolio contact form.
Best regards,
Your Portfolio Bot
```
5. Click "Save"
6. **Copy Template ID** (looks like: `template_xyz789`)

### **Step 4: Get Public Key**
1. Click "Account" → "API Keys"
2. **Copy Public Key** (looks like: `public_key_here`)

### **Step 5: Update Your Code**
In `src/components/Contact.js`, replace these 3 values:

```javascript
emailjs.sendForm(
  'YOUR_SERVICE_ID',     // ← Replace with: service_abc123
  'YOUR_TEMPLATE_ID',    // ← Replace with: template_xyz789
  form.current,
  'YOUR_PUBLIC_KEY'      // ← Replace with: public_key_here
)
```

### **Step 6: Test Your Form**
1. Save the file
2. Refresh your portfolio
3. Go to Contact section
4. Fill out the form and submit
5. Check your email for the message!

## 🎯 **What You'll Get:**
- ✅ **Professional contact form**
- ✅ **Real-time email delivery**
- ✅ **100 free emails per month**
- ✅ **No backend server needed**
- ✅ **Mobile responsive design**

## 🔧 **Troubleshooting:**
- **Form not sending?** Check that all 3 IDs are replaced correctly
- **Emails not received?** Check spam folder and EmailJS dashboard
- **Console errors?** Make sure EmailJS package is installed

## 📱 **Your Contact Form Features:**
- Name, email, and message fields
- Required field validation
- Loading states with spinner
- Success/error messages
- Professional styling
- Mobile-friendly design

## 🚀 **Ready to Go!**
Once you replace the 3 placeholder values, your contact form will work perfectly and send emails directly to your Gmail inbox!

---
**Need help?** The form is already styled and ready - just add your EmailJS credentials!
