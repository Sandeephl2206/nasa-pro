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