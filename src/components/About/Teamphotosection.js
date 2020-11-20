import React from "react"

export default function Teamphotosection() {
  return (
    <div className="row col-10 col-sm-10 mx-auto">
      <div className="card-group ">
        <div className="card">
          <img
            className="card-img-top"
            src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"
            alt="Card cap"
          />
          <div className="card-body">
            <h5 className="card-title">Random Face title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkvFCLSMbUU6Bqb1m-0y3LPAQ7_Gcs-PNZw&usqp=CAU"
            alt="Card cap"
          />
          <div className="card-body">
            <h5 className="card-title">Duck Face</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src="https://thebhakti.com/wp-content/uploads/2019/01/mahakal.jpg"
            alt="Card cap"
          />
          <div className="card-body">
            <h5 className="card-title">Penguin Face</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
