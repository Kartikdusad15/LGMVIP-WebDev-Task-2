import React from 'react'

export default function User(props) {

    const {email,name,avatar}=props;
    console.log(email)

    return (
        <>

        <div class="card" style={{width:"200px",marginLeft:"15px",marginTop:"100px"}}>
        <img src={avatar} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#k" class="btn btn-primary w-100">{email}</a>
        </div>
       </div>

        {/* <div className="user-profile">
            <div className="border">
            <div class="avatar">
                <img src={avatar} />
            </div>
        </div> */}
{/*             
            <div class="user-data">
                <h4>{name}</h4>

                <h6 class="blur">About me</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, fugiat.</p>
                <h6 class="blur">Email</h6>
                <p>{email}</p>
            </div> */}
            
            
        {/* </div> */}
      
        </>
    )
}
