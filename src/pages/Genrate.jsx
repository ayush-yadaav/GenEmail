import React, { useState } from "react";
import toast from "react-hot-toast";
import { BiSolidSave } from "react-icons/bi";
import { BsArrowRepeat } from "react-icons/bs";
import { FaRegCopy } from "react-icons/fa";
import { motion } from "framer-motion";

const Genrate = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const [form, setForm] = useState({
    purpose: "",
    tone: "",
    recipientType: "",
    yourName: "",
    recipientName: "",
    company: "",
    jobTitle: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [generatedEmail, setGeneratedEmail] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateEmail = async () => {
    setLoading(true);

    const question = `
Write a ${form.tone.toLowerCase()} and professional email to a ${form.recipientType} named ${form.recipientName} at ${form.company}. 
The email is for the purpose: ${form.purpose}. 
Mention that I am ${form.yourName}, applying for the ${form.jobTitle} role. 
${form.message ? `Additional note: ${form.message}` : ""}
Keep it concise and impactful. Sign off professionally.
    `.trim();

    const payload = {
      contents: [
        {
          parts: [{ text: question }],
        },
      ],
    };

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();
      const emailOutput =
        data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response received.";
      setGeneratedEmail(emailOutput.trim());
    } catch (err) {
      console.error("Error generating email:", err);
      setGeneratedEmail("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const savedEmail = () => {
    if (!generatedEmail) return alert("No Email Saved");

    const prevEmails = JSON.parse(localStorage.getItem("generatedEmails")) || [];

    const newEmail = {
      text: generatedEmail,
      Date: new Date().toLocaleString(),
      formData: form,
    };

    localStorage.setItem("generatedEmails", JSON.stringify([newEmail, ...prevEmails]));
    toast.success("Email Saved");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedEmail);
    toast.success("Copied Successfully!");
  };

  return (
    <div className="dark:bg-black text-black dark:text-white min-h-screen">
      <motion.div
        className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Form Section */}
        <motion.div
          className="bg-white dark:bg-slate-950 p-6 rounded-2xl shadow"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold mb-4">Generate Your Email</h2>
          <div className="space-y-4">
            <select
              name="purpose"
              onChange={handleChange}
              className="w-full p-2 border rounded dark:bg-slate-950 dark:text-white"
            >
              <option value="">Select Purpose</option>
              <option>Apply for Internship</option>
              <option>Follow Up</option>
              <option>Thank You</option>
              <option>Cold Email</option>
            </select>

            <select
              name="tone"
              onChange={handleChange}
              className="w-full p-2 border rounded dark:bg-slate-950 dark:text-white"
            >
              <option value="">Select Tone</option>
              <option>Formal</option>
              <option>Friendly</option>
              <option>Polite</option>
              <option>Enthusiastic</option>
            </select>

            <select
              name="recipientType"
              onChange={handleChange}
              className="w-full p-2 border rounded dark:bg-slate-950 dark:text-white"
            >
              <option value="">Select Recipient</option>
              <option>Recruiter</option>
              <option>Professor</option>
              <option>Developer</option>
              <option>HR</option>
            </select>

            <input
              type="text"
              name="yourName"
              placeholder="Your Name"
              onChange={handleChange}
              className="w-full p-2 border rounded dark:bg-slate-950 dark:text-white"
            />
            <input
              type="text"
              name="recipientName"
              placeholder="Recipient Name"
              onChange={handleChange}
              className="w-full p-2 border rounded dark:bg-slate-950 dark:text-white"
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              onChange={handleChange}
              className="w-full p-2 border rounded dark:bg-slate-950 dark:text-white"
            />
            <input
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              onChange={handleChange}
              className="w-full p-2 border rounded dark:bg-slate-950 dark:text-white"
            />
            <textarea
              name="message"
              placeholder="Optional Message / Context"
              onChange={handleChange}
              rows="3"
              className="w-full p-2 border rounded dark:bg-slate-950 dark:text-white"
            ></textarea>

            <motion.button
              onClick={generateEmail}
              disabled={loading}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              {loading ? "Generating..." : "Generate Email"}
            </motion.button>
          </div>
        </motion.div>

        {/* Email Output */}
        <motion.div
          className="bg-gray-100 dark:bg-slate-950 dark:text-white p-6 rounded-2xl shadow"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold mb-4">AI Generated Email Preview</h2>
          <div className="whitespace-pre-wrap bg-white dark:bg-slate-950 dark:text-white p-4 rounded border min-h-[250px]">
            {generatedEmail || "Your email will appear here..."}
          </div>

          <div className="flex gap-5 mt-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              onClick={copyToClipboard}
              className="text-black dark:text-white text-2xl"
            >
              <FaRegCopy />
            </motion.button>

            <motion.button
              whileTap={{ rotate: 360 }}
              whileHover={{ scale: 1.1 }}
              onClick={generateEmail}
              className="text-black dark:text-white text-2xl"
            >
              <BsArrowRepeat />
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              onClick={savedEmail}
              className="text-black dark:text-white text-2xl"
            >
              <BiSolidSave />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Genrate;
