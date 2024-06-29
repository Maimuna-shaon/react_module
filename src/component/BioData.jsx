/*para={
  name:"Asif Mahir",
  age:27,
  email: asiefmahir1@gmail.com,
  skills:["React","Redus","NodeJS"],
  interests:["System Design","Football","Chess"],
  socialinks:[
    {medianame:"fb",mediaAdd:"FB.com/asifmahir"},
    {medianame:"Github",mediaAdd:"github.com/asifmahir"},
    {medianame:"LinkedIn",mediaAdd:"LinkedIn.com/asifmahir"}
  ]
};*/


const BioData = (props) => {
  //const { name, age, email, skills, interests, sociallinks } = props;
console.log(props,"props");
return(
<div className="bio-data">
    <div className="personal-info">
    <h2>Bio Data Of {props.name}</h2>
    <p>
     <strong>Age : </strong> {props.age}
     </p>
     <p>
     <strong>Email: </strong> {props.email}
     </p>
  
    </div>
    <div className="skills">
     <h2>My skills:</h2>
     <ul>
       {props.skills.map((skill)=>(
        <li key={skill}>{skill} </li>
       )
      )}
     </ul>
    </div>
    <div className="interests">
     <h2>My interest</h2>
     <ul>
      {props.interests.map((interest)=>(
          <li key={interest}>{interest} </li>
      )
    )}
     </ul>
    </div>
     <div className="social-link">
     <h2>My Social Medias: </h2>
     {props.sociallinks.map((sociallink)=>(
       <p key={sociallink.medianame}>
       <strong>{sociallink.medianame}</strong>{" "} {sociallink.mediaAdd}
       </p>
     )
    )}
     
     </div>
</div>
)
};
export default BioData;

//component func pascal case e likhte hbe