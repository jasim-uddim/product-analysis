import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1>What is context api ?</h1>
      <p>
        Ans:-The React Context API is a way for a React app to effectively
        produce global variables that can be passed around. This is the
        alternative to "prop drilling" or moving props from grandparent to child
        to parent, and so on. Context is also touted as an easier, lighter
        approach to state management using Redux.Context API is a (kind of) new
        feature added in version 16.3 of React that allows one to share state
        across the entire app (or part of it) lightly and with
        ease.React.createContext() is all you need. It returns a consumer and a
        provider. Provider is a component that as it's names suggests provides
        the state to its children. It will hold the "store" and be the parent of
        all the components that might need that store{" "}
      </p>
      <h1>what is semantic tag ?</h1>
      <p>
        Ans:-The benefit of writing semantic HTML stems from what should be the
        driving goal of any web page: the desire to communicate. By adding
        semantic tags to your document, you provide additional information about
        that document, which aids in communication. Specifically, semantic tags
        make it clear to the browser what the meaning of a page and its content
        is. That clarity is also communicated with search engines, ensuring that
        the right pages are delivered for the right queries.Using semantic tags
        gives you many more hooks for styling your content, too. Perhaps today
        you prefer to have your code samples display in the default browser
        style, but tomorrow, you might want to call them out with a gray
        background color; later still, you might want to define the precise
        mono-spaced font family or font stack to use for your samples. You can
        do all of these things easily by using semantic markup and smartly
        applied CSS.
      </p>
      <h1>Difference inline block inline-block element?</h1>
      <p>
        Ans:-Formatting. By default, inline elements do not force a new line to
        begin in the document flow. Block elements, on the other hand, typically
        cause a line break to occur.Understaning how block, inline, and
        inline-block each behave is very important when learning CSS, as well as
        knowing why you might want to switch the display property of an element
        every now and then.
      </p>
    </div>
  );
};

export default Blogs;
