import React from 'react'
import {motion, useScroll, useSpring, useTransform} from 'framer-motion'
export default function ScrollAnimations() {
    const {scrollYProgress}= useScroll();

    const scaleX=useSpring(scrollYProgress);

    //motion value read about it
    const background =useTransform(scrollYProgress,
        [0,0.25,0.5,0.75,1], 
        ["#99ebde","#00cccc","#119999","#223377" ,"#0c1847"]
    )
  return (
    <div>
        <motion.div 
            style={{
                // scaleX:scrollYProgress,
                scaleX,
                // background:'blue',
                background,
                transformOrigin:"left",
                position:"sticky",
                top:0,
                width:"100%",
                height:"20px",
            }}
        />
        <div
            style={{
                maxWidth:'700px',
                margin:"auto",
                padding:"1.2rem",
            }}
        >
            <p>
                JSX to Virtual DOM: React components use JSX (JavaScript XML) to define the structure of the UI. This JSX is converted into a virtual DOM, which is a lightweight representation of the actual DOM.
                Virtual DOM allows React to efficiently compare (or "diff") the current UI with the previous one to determine what has changed.
                Diffing Algorithm: React uses a diffing algorithm to compare the current virtual DOM tree with the previous one and find the minimal set of changes needed to update the actual DOM.
                Updating the Real DOM: Based on the diff, React updates only the necessary parts of the actual DOM. This is known as reconciliation, and it makes rendering efficient by avoiding full-page reloads or complete re-renders of the entire UI.
            </p>
            <p>
                JSX to Virtual DOM: React components use JSX (JavaScript XML) to define the structure of the UI. This JSX is converted into a virtual DOM, which is a lightweight representation of the actual DOM.
                Virtual DOM allows React to efficiently compare (or "diff") the current UI with the previous one to determine what has changed.
                Diffing Algorithm: React uses a diffing algorithm to compare the current virtual DOM tree with the previous one and find the minimal set of changes needed to update the actual DOM.
                Updating the Real DOM: Based on the diff, React updates only the necessary parts of the actual DOM. This is known as reconciliation, and it makes rendering efficient by avoiding full-page reloads or complete re-renders of the entire UI.
            </p>
            <p>
                JSX to Virtual DOM: React components use JSX (JavaScript XML) to define the structure of the UI. This JSX is converted into a virtual DOM, which is a lightweight representation of the actual DOM.
                Virtual DOM allows React to efficiently compare (or "diff") the current UI with the previous one to determine what has changed.
                Diffing Algorithm: React uses a diffing algorithm to compare the current virtual DOM tree with the previous one and find the minimal set of changes needed to update the actual DOM.
                Updating the Real DOM: Based on the diff, React updates only the necessary parts of the actual DOM. This is known as reconciliation, and it makes rendering efficient by avoiding full-page reloads or complete re-renders of the entire UI.
            </p>
            <p>
                JSX to Virtual DOM: React components use JSX (JavaScript XML) to define the structure of the UI. This JSX is converted into a virtual DOM, which is a lightweight representation of the actual DOM.
                Virtual DOM allows React to efficiently compare (or "diff") the current UI with the previous one to determine what has changed.
                Diffing Algorithm: React uses a diffing algorithm to compare the current virtual DOM tree with the previous one and find the minimal set of changes needed to update the actual DOM.
                Updating the Real DOM: Based on the diff, React updates only the necessary parts of the actual DOM. This is known as reconciliation, and it makes rendering efficient by avoiding full-page reloads or complete re-renders of the entire UI.
            </p>
            <p>
                JSX to Virtual DOM: React components use JSX (JavaScript XML) to define the structure of the UI. This JSX is converted into a virtual DOM, which is a lightweight representation of the actual DOM.
                Virtual DOM allows React to efficiently compare (or "diff") the current UI with the previous one to determine what has changed.
                Diffing Algorithm: React uses a diffing algorithm to compare the current virtual DOM tree with the previous one and find the minimal set of changes needed to update the actual DOM.
                Updating the Real DOM: Based on the diff, React updates only the necessary parts of the actual DOM. This is known as reconciliation, and it makes rendering efficient by avoiding full-page reloads or complete re-renders of the entire UI.
            </p>
            <p>
                JSX to Virtual DOM: React components use JSX (JavaScript XML) to define the structure of the UI. This JSX is converted into a virtual DOM, which is a lightweight representation of the actual DOM.
                Virtual DOM allows React to efficiently compare (or "diff") the current UI with the previous one to determine what has changed.
                Diffing Algorithm: React uses a diffing algorithm to compare the current virtual DOM tree with the previous one and find the minimal set of changes needed to update the actual DOM.
                Updating the Real DOM: Based on the diff, React updates only the necessary parts of the actual DOM. This is known as reconciliation, and it makes rendering efficient by avoiding full-page reloads or complete re-renders of the entire UI.
            </p>
            <p>
                JSX to Virtual DOM: React components use JSX (JavaScript XML) to define the structure of the UI. This JSX is converted into a virtual DOM, which is a lightweight representation of the actual DOM.
                Virtual DOM allows React to efficiently compare (or "diff") the current UI with the previous one to determine what has changed.
                Diffing Algorithm: React uses a diffing algorithm to compare the current virtual DOM tree with the previous one and find the minimal set of changes needed to update the actual DOM.
                Updating the Real DOM: Based on the diff, React updates only the necessary parts of the actual DOM. This is known as reconciliation, and it makes rendering efficient by avoiding full-page reloads or complete re-renders of the entire UI.
            </p>
            <p>
                JSX to Virtual DOM: React components use JSX (JavaScript XML) to define the structure of the UI. This JSX is converted into a virtual DOM, which is a lightweight representation of the actual DOM.
                Virtual DOM allows React to efficiently compare (or "diff") the current UI with the previous one to determine what has changed.
                Diffing Algorithm: React uses a diffing algorithm to compare the current virtual DOM tree with the previous one and find the minimal set of changes needed to update the actual DOM.
                Updating the Real DOM: Based on the diff, React updates only the necessary parts of the actual DOM. This is known as reconciliation, and it makes rendering efficient by avoiding full-page reloads or complete re-renders of the entire UI.
            </p>
            <p>
                JSX to Virtual DOM: React components use JSX (JavaScript XML) to define the structure of the UI. This JSX is converted into a virtual DOM, which is a lightweight representation of the actual DOM.
                Virtual DOM allows React to efficiently compare (or "diff") the current UI with the previous one to determine what has changed.
                Diffing Algorithm: React uses a diffing algorithm to compare the current virtual DOM tree with the previous one and find the minimal set of changes needed to update the actual DOM.
                Updating the Real DOM: Based on the diff, React updates only the necessary parts of the actual DOM. This is known as reconciliation, and it makes rendering efficient by avoiding full-page reloads or complete re-renders of the entire UI.
            </p>
            <p>
                JSX to Virtual DOM: React components use JSX (JavaScript XML) to define the structure of the UI. This JSX is converted into a virtual DOM, which is a lightweight representation of the actual DOM.
                Virtual DOM allows React to efficiently compare (or "diff") the current UI with the previous one to determine what has changed.
                Diffing Algorithm: React uses a diffing algorithm to compare the current virtual DOM tree with the previous one and find the minimal set of changes needed to update the actual DOM.
                Updating the Real DOM: Based on the diff, React updates only the necessary parts of the actual DOM. This is known as reconciliation, and it makes rendering efficient by avoiding full-page reloads or complete re-renders of the entire UI.
            </p>
            <p>
                JSX to Virtual DOM: React components use JSX (JavaScript XML) to define the structure of the UI. This JSX is converted into a virtual DOM, which is a lightweight representation of the actual DOM.
                Virtual DOM allows React to efficiently compare (or "diff") the current UI with the previous one to determine what has changed.
                Diffing Algorithm: React uses a diffing algorithm to compare the current virtual DOM tree with the previous one and find the minimal set of changes needed to update the actual DOM.
                Updating the Real DOM: Based on the diff, React updates only the necessary parts of the actual DOM. This is known as reconciliation, and it makes rendering efficient by avoiding full-page reloads or complete re-renders of the entire UI.
            </p>
            <p>
                JSX to Virtual DOM: React components use JSX (JavaScript XML) to define the structure of the UI. This JSX is converted into a virtual DOM, which is a lightweight representation of the actual DOM.
                Virtual DOM allows React to efficiently compare (or "diff") the current UI with the previous one to determine what has changed.
                Diffing Algorithm: React uses a diffing algorithm to compare the current virtual DOM tree with the previous one and find the minimal set of changes needed to update the actual DOM.
                Updating the Real DOM: Based on the diff, React updates only the necessary parts of the actual DOM. This is known as reconciliation, and it makes rendering efficient by avoiding full-page reloads or complete re-renders of the entire UI.
            </p>
            <p>
                JSX to Virtual DOM: React components use JSX (JavaScript XML) to define the structure of the UI. This JSX is converted into a virtual DOM, which is a lightweight representation of the actual DOM.
                Virtual DOM allows React to efficiently compare (or "diff") the current UI with the previous one to determine what has changed.
                Diffing Algorithm: React uses a diffing algorithm to compare the current virtual DOM tree with the previous one and find the minimal set of changes needed to update the actual DOM.
                Updating the Real DOM: Based on the diff, React updates only the necessary parts of the actual DOM. This is known as reconciliation, and it makes rendering efficient by avoiding full-page reloads or complete re-renders of the entire UI.
            </p>
            <p>
                JSX to Virtual DOM: React components use JSX (JavaScript XML) to define the structure of the UI. This JSX is converted into a virtual DOM, which is a lightweight representation of the actual DOM.
                Virtual DOM allows React to efficiently compare (or "diff") the current UI with the previous one to determine what has changed.
                Diffing Algorithm: React uses a diffing algorithm to compare the current virtual DOM tree with the previous one and find the minimal set of changes needed to update the actual DOM.
                Updating the Real DOM: Based on the diff, React updates only the necessary parts of the actual DOM. This is known as reconciliation, and it makes rendering efficient by avoiding full-page reloads or complete re-renders of the entire UI.
            </p>
            <p>
                JSX to Virtual DOM: React components use JSX (JavaScript XML) to define the structure of the UI. This JSX is converted into a virtual DOM, which is a lightweight representation of the actual DOM.
                Virtual DOM allows React to efficiently compare (or "diff") the current UI with the previous one to determine what has changed.
                Diffing Algorithm: React uses a diffing algorithm to compare the current virtual DOM tree with the previous one and find the minimal set of changes needed to update the actual DOM.
                Updating the Real DOM: Based on the diff, React updates only the necessary parts of the actual DOM. This is known as reconciliation, and it makes rendering efficient by avoiding full-page reloads or complete re-renders of the entire UI.
            </p>
            <p>
                JSX to Virtual DOM: React components use JSX (JavaScript XML) to define the structure of the UI. This JSX is converted into a virtual DOM, which is a lightweight representation of the actual DOM.
                Virtual DOM allows React to efficiently compare (or "diff") the current UI with the previous one to determine what has changed.
                Diffing Algorithm: React uses a diffing algorithm to compare the current virtual DOM tree with the previous one and find the minimal set of changes needed to update the actual DOM.
                Updating the Real DOM: Based on the diff, React updates only the necessary parts of the actual DOM. This is known as reconciliation, and it makes rendering efficient by avoiding full-page reloads or complete re-renders of the entire UI.
            </p>
            <p>
                JSX to Virtual DOM: React components use JSX (JavaScript XML) to define the structure of the UI. This JSX is converted into a virtual DOM, which is a lightweight representation of the actual DOM.
                Virtual DOM allows React to efficiently compare (or "diff") the current UI with the previous one to determine what has changed.
                Diffing Algorithm: React uses a diffing algorithm to compare the current virtual DOM tree with the previous one and find the minimal set of changes needed to update the actual DOM.
                Updating the Real DOM: Based on the diff, React updates only the necessary parts of the actual DOM. This is known as reconciliation, and it makes rendering efficient by avoiding full-page reloads or complete re-renders of the entire UI.
            </p>
            <p>
                JSX to Virtual DOM: React components use JSX (JavaScript XML) to define the structure of the UI. This JSX is converted into a virtual DOM, which is a lightweight representation of the actual DOM.
                Virtual DOM allows React to efficiently compare (or "diff") the current UI with the previous one to determine what has changed.
                Diffing Algorithm: React uses a diffing algorithm to compare the current virtual DOM tree with the previous one and find the minimal set of changes needed to update the actual DOM.
                Updating the Real DOM: Based on the diff, React updates only the necessary parts of the actual DOM. This is known as reconciliation, and it makes rendering efficient by avoiding full-page reloads or complete re-renders of the entire UI.
            </p>
        </div>
    </div>
  )
}
