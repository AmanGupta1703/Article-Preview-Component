import { useState } from "react";

export default function Article() {
  const [showShareIcons, setShowShareIcons] = useState(false);

  function handleClick() {
    setShowShareIcons((prevShareIcon) => !prevShareIcon);
  }

  return (
    <section className="article--component">
      <article className="article">
        <img
          className="article-img"
          src="images/drawers.jpg"
          alt="drawer-img"
        />

        <article className="article--body">
          <h1 className="article--big_heading">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p className="article--text">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>

          {showShareIcons ? (
            <>
              <article className="social--media_icons">
                <h2 className="share">Share</h2>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-pinterest"></i>
              </article>
              <div className="diamond"></div>
            </>
          ) : null}

          <article className="article--user_info">
            <div>
              <img
                src="images/avatar-michelle.jpg"
                alt="avatar-michelle"
                className="user--avatar"
              />

              <article className="user--info">
                <h3 className="username">Michelle Appleton</h3>
                <span className="date">28 Jun 2020</span>
              </article>
            </div>

            <img
              src="images/icon-share.svg"
              alt=""
              className="arrow"
              onClick={handleClick}
            />
          </article>
        </article>
      </article>
    </section>
  );
}
