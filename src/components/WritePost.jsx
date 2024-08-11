import React, { useState, useEffect, useContext } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Client, Databases, ID } from "appwrite";
import { BlogContext } from '../contexts/BlogContext';
function WritePost() {
  const {fetchBlogs}=useContext(BlogContext)

  const [name, setname] = useState("");
  const [title, settitle] = useState("");
  
  const [tmvalue, tmsetValue] = useState("write your post here");
  // useEffect(() => tmsetValue(initialValue ?? ''), [initialValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const client = new Client()
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('66b89b6e0018b70022e9');

    const databases = new Databases(client);

    const promise = databases.createDocument(
      '66b89bb90015cc35b4a3',
      '66b89bc80014b3701353',
      ID.unique(),
      {
        "Title": title,
        "Name": name,
        "content": tmvalue,
        "Date": new Date().toISOString()
      }
    );

    promise.then(function (response) {
      fetchBlogs();
      window.alert("your post added , check home page to see your post")
      console.log(response);
      setname("");
      settitle("");
      tmsetValue("write your post here");
    }, function (error) {
      window.alert(error)
      setname("");
      settitle("");
      tmsetValue("write your post here");
    });
  }


  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Title of your post"
          value={title}
          onChange={(e) => settitle(e.target.value)}
          required
        />
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setname(e.target.value)}
          required
        />
        <Editor
          apiKey='3r7ihikbj2mi7q3e6647omeb61rr5ta8knd36ufhlplhxzg1'
          value={tmvalue}
          onEditorChange={(newValue, editor) => {
            tmsetValue(newValue)
          }}
    
          init={{
            plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
            tinycomments_mode: 'embedded',
            tinycomments_author: 'Author name',
            mergetags_list: [
              { value: 'First.Name', title: 'First Name' },
              { value: 'Email', title: 'Email' },
            ],
            ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
          }}
        />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit Post
        </button>
      </form>
    </div>
  );
}

export default WritePost;
