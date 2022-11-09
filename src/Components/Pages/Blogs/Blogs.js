import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blogs = () => {
    useTitle("Blog")
    return (
        <div className='mt-10 lg:m-10 pb-24'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-transparent rounded-box  w-full">
                <div className="collapse-title text-xl font-bold">
                    Difference between SQL and NoSQL
                </div>
                <div className="collapse-content">
                    <p className='font-bold'>SQL has been around for over 40 years, so it is recognizable, documented, and widely-used. Safe and versatile, it’s particularly well suited for complex queries. However, SQL restricts the user to working within a predefined tabular schema, and more care must be taken to organize and understand the data before it is used.

                        The dynamic schemata of NoSQL databases allow representation of alternative structures, often alongside each other, encouraging greater flexibility. There is less emphasis on planning, greater freedom when adding new attributes or fields, and the possibility of varied syntax across databases. As a group, however, NoSQL languages lack the standard interface which SQL provides, so more complex queries can be difficult to execute.

                        Though there are many dialects of SQL, all share a common syntax and almost-identical grammar. When querying relational databases, fluency in one language translates to proficiency in most others. On the other hand, there is very little consistency between NoSQL languages, as they concern a diverse set of unrelated technologies. Many NoSQL databases have a unique data manipulation language constrained by particular structures and capabilities.</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-transparent rounded-box  w-full">
                <div className="collapse-title text-xl font-bold">
                    What is JWT, and how does it work?
                </div>
                <div className="collapse-content">
                    <p className='font-bold'>
                        JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                    </p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-transparent rounded-box  w-full">
                <div className="collapse-title text-xl font-bold">
                    What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content">
                    <p className='font-bold'>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-transparent rounded-box  w-full">
                <div className="collapse-title text-xl font-bold">
                    How does Node JS handle multiple requests at the same time?
                </div>
                <div className="collapse-content">
                    <p className='font-bold'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                </div>
            </div>
        </div>

    );
};

export default Blogs;