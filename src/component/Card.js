
import React from 'react'


const Card = () => {
    const obj = [
        {
             img:'./img/faces/face_5.jpg',
            name: "Tina",
            post: "CEO / Co-Founder",
            contant: `I miss the old Kanye I gotta say at that time I’d like to meet Kanye And I promise the power is in the people and I will use the power given by the people to bring everything I have back to the people`
        },

        {
            img: './img/faces/face_4.jpg',
            name: 'Andrew',
            post: "Product Designer",
            contant: `  I miss the old Kanye I gotta say at that time I’d like
           to meet Kanye And I promise the power is in the people
           and I will use the power given by the people to bring
           everything I have back to the people`

        },

        {
            img: './img/faces/face_3.jpg',
            name: "Michelle",
            post: "Marketing Hacker",
            contant: `  I miss the old Kanye I gotta say at that time I’d like
            to meet Kanye And I promise the power is in the people
            and I will use the power given by the people to bring
            everything I have back to the people.`
        }




    ]

    return (
        <>



        <div class="row">
{
obj.map((value)=>{
return(
<div class="col-md-4">
<div class="card card-member">
<div class="content">
<div class="avatar avatar-danger">
<img src={value.img} />
</div>
<div class="description">
<h3 class="title">{value.name}</h3>
<p class="small-text">{value.post}</p>
<p class="description">{value.contant}</p>
</div>
</div>
</div>
</div>
)

})
}
</div>



        </>
    )
}

export default Card