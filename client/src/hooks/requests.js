//const API_URL = "http://localhost:8000";

async function httpGetPlanets() {
  const response = await fetch("http://localhost:8000/planets")
  return await response.json();
}

async function httpGetLaunches() {
  // TODO: Once API is ready. 
  // Load launches, sort by flight number, and return as JSON.  
  const response = await fetch("http://localhost:8000/launches")
  const fetchedlaunches = response.json();
  return fetchedlaunches;
}

// TODO: Once API is ready.
// Submit given launch data to launch system.
async function httpSubmitLaunch(launch) {
  try{
  
  return await fetch("http://localhost:8000/launches",{
    method: "post",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(launch), 
  })
  }catch(err){
    return {
      ok: false,
    };
  }
}

async function httpAbortLaunch(id) {
  try{
    return await fetch(`http://localhost:8000/launches/${id}`,{
    method : "delete",
    });
  }catch(err){
    console.log(err);
    return {
      ok:false,
    }
  }

}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};





/*
Jest 
Cluster 
Pm2
Worker Thread
Introduction to MongoDB
SQl vs MongoDB
Connection to MongoDb




Date: 03/03/23

InTime :- 12:00 AM
OutTime :- 08:30 PM

Name : Sandeep Lohar
LearnTechnology : Node js

Today's Learn / work Hours : 8 hours
Total work Hours : 248 hours

Today's work : 
Jest 
Cluster 
Pm2
Worker Thread
Introduction to MongoDB
SQl vs MongoDB
Connection to MongoDb

All Good.



Project title - Realtime collabrative development system 
Project Description -
--> logger - 
--> Join User - the logged user can edit the code 

*/