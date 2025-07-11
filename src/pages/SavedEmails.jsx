import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaRegCopy } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { motion } from 'framer-motion';

function SavedEmails() {
  const [emails, setemails] = useState([]);

  useEffect(() => {
    const SavedEmails = JSON.parse(localStorage.getItem("generatedEmails")) || [];
    setemails(SavedEmails);
  }, []);

  const handleDelete = (indexToRemove) => {
    const updatedEmails = emails.filter((_, index) => index !== indexToRemove);
    setemails(updatedEmails);
    localStorage.setItem("generatedEmails", JSON.stringify(updatedEmails));
    toast.success("Email Deleted");
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied Successfully");
  };

  return (
    <motion.section
      className='dark:bg-black dark:text-white min-h-screen'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto px-4 py-6">
        <h2 className='text-4xl font-bold mb-4'>Saved Emails</h2>

        {emails.length === 0 ? (
          <p>No emails saved</p>
        ) : (
          <div className="space-y-4">
            {emails.map((email, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-slate-950 dark:text-white p-4 rounded shadow"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Generated on: {email.Date}
                  </div>
                  <div className="flex gap-3">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      whileHover={{ scale: 1.1 }}
                      onClick={() => handleDelete(index)}
                      className='md:text-2xl text-xl text-red-600 hover:text-red-400'
                    >
                      <MdDelete />
                    </motion.button>

                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      whileHover={{ scale: 1.1 }}
                      onClick={() => copyToClipboard(email.text)}
                      className="text-black dark:text-white text-xl"
                    >
                      <FaRegCopy />
                    </motion.button>
                  </div>
                </div>

                <pre className='whitespace-pre-wrap text-sm md:text-base'>{email.text}</pre>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
}

export default SavedEmails;
