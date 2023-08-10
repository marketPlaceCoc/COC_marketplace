import React, { useState, useEffect } from "react";

const AddReviewForm = ({ setAddReview, setReview, review }) => {
  const [name, setName] = useState("");
  const [desc, setdesc] = useState("");
  const [stars, setStars] = useState(0);

  const handleSubmit = async (e) => {
    // e.preventDefault();

    const newReview = {
      review: {
        name: name,
        review: desc,
        stars: stars,
      },
    };

    // console.log(review)
    // console.log(review)

    try {
      // const response = await fetch('https://clashmarketplace-backend.onrender.com/get_data'); // Replace with your API endpoint
      const response = await fetch("http://127.0.0.1:8080/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify(newReview),
      }); // Replace with your API endpoint
      const jsonData = await response.json();
      console.log(jsonData);
      // setReview(...review, newReview);
      alert("Successfully added");
      setAddReview(false);
    } catch (error) {
      console.log("Error:", error);
      alert("error occured in adding review");
      setAddReview(false);
    }

    // Clear the form fields
    setName("");
    setdesc("");
    setStars(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Review</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="review">Review:</label>
        <textarea
          id="review"
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="stars">Stars:</label>
        <input
          type="number"
          id="stars"
          value={stars}
          onChange={(e) => setStars(Number(e.target.value))}
          min={1}
          max={5}
          required
        />
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default function Review() {
  const rev = [
    {
      name: "Random User",
      review:
        "The product sold here is very good, devievery is on time and its well trusted",
      stars: 5,
      date: "23rd jan 2022",
    },
    {
      name: "<NAME>",
      review:
        "I have been using this site since last year, it has helped me a lot to buy my items in clash of clans, i would recommend you all to use this website.",
      stars: 4,
      date: "2nd feb 2022",
    },
    {
      name: "Random User",
      review:
        "The product sold here is very good, devievery is on time and its well trusted",
      stars: 5,
      date: "23rd jan 2022",
    },
  ];
  const [review, setReviews] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [unavailabe, setUnavailable] = useState(false);
  const [addReview, setAddReview] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('https://clashmarketplace-backend.onrender.com/get_data'); // Replace with your API endpoint
        const response = await fetch("http://127.0.0.1:8080/reviews"); // Replace with your API endpoint
        const jsonData = await response.json();
        setReviews(jsonData["review"]);
        console.log(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.log("Error:", error);
        setUnavailable(true);
      }
    };

    fetchData();
  }, []);
  if (unavailabe) {
    return (
      <div className="Loading_pg">
        <h1>Unable to load content</h1>
      </div>
    ); // Display loader while fetching data
  }

  if (isLoading) {
    return (
      <div className="Loading_pg">
        <h1 className="loading">Loading...</h1>
      </div> // Display loader while fetching data
    );
  }
  const submit_review = async () => {};
  return (
    <div id="Reviews">
        <div className="title">
          <h1 className="HomeHeading">Clash marketplace</h1>
          <div className="stars">
            {/* svg{fill:"#ffd91a"} */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
          </div>
          </div>
        <p className="content">
          ✅VERIFIED SELLER 
          <br />
          ⏬ABOUT OUR STORE : 
          <br />
          ✅Trusted and Safe 
          <br />
          ✅Fast
          response and support 
          <br />
          <br />
          ⏩SATISFACTION GUARANTEED Delivery is only few minutes
          <br />
          {" unless I am sleeping "}
          <br />
          <br />
          ✅what we prioritize is-Account is very secure & the best for sell.
          <br />
          ⏩To ensure we provide the fastest customer support, contact us on Player Auction Chat
          <br />
          {" provide order number "}
          <br />
          <br />
          Please be patient, Don't cancel orders ⭐️Contact me Granted007⭐️
          <br />
          Thankyou!!
        </p>

        <div className="reviews">
          {review.map((element, index) => (
            <div className="review" key={index}>
              <div className="top">
                <p className="date">{element.date}</p>
              <div>
                {[...Array(element.stars)].map((_, starIndex) => (
                  <span key={starIndex} role="img" aria-label="star">
                    ⭐️
                  </span>
                ))}
              </div>
              </div>
              <h1 className="name">{element.name}</h1>
              <p className="rev">{element.review}</p>
            </div>
            // <Sale_Tile key={index} uid={props.uid} element={element}/>
          ))}
        </div>
        <div className="add_Review">
          {addReview ? (
            <AddReviewForm
              review={review}
              setReview={setReviews}
              setAddReview={setAddReview}
            ></AddReviewForm>
          ) : (
            <button
              onClick={() => {
                setAddReview(!addReview);
              }}
            >
              Add Review
            </button>
          )}
        </div>
      </div>
  );
}
