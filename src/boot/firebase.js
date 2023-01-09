import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get, remove } from "firebase/database";
import { store } from "../store/database";

const firebaseConfig = {
  apiKey: "**************************",
  authDomain: "**************************",
  projectId: "**************************",
  storageBucket: "**************************",
  messagingSenderId: "**************************",
  appId: "**************************",
  databaseURL: "**************************",
};

const incidents_collection_name = "incidents";
const violations_collection_name = "violations";
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export function addIncident(incidentObject) {
  const incident_id = incidentObject.id;
  set(
    ref(database, `${incidents_collection_name}/` + incident_id),
    incidentObject
  );
}

export function addViolation(violationObject) {
  console.log("adding:");
  console.log(violationObject);
  const id = violationObject.id;
  set(ref(database, `${violations_collection_name}/` + id), violationObject);
}
export async function getViolations() {
  const dbRef = ref(getDatabase());
  let violations = [];
  await get(child(dbRef, violations_collection_name))
    .then((snapshot) => {
      if (snapshot.exists()) {
        violations = snapshot.val();
        console.log(violations);
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  store.initializeViolations(violations);
  return violations;
}

export async function deleteViolation(violationObject) {
  const id = violationObject.id;
  remove(ref(database, `${violations_collection_name}/` + id), violationObject);
}
export async function deleteIncident(incidentObject) {
  const id = incidentObject.id;
  remove(ref(database, `${incidents_collection_name}/` + id), incidentObject);
}

export async function getIncidents() {
  const dbRef = ref(getDatabase());
  let incidents = [{ name: "aaa" }];
  await get(child(dbRef, incidents_collection_name))
    .then((snapshot) => {
      if (snapshot.exists()) {
        incidents = snapshot.val();
        console.log("FOUND INCIDENTS:");
        console.log(incidents);
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  store.initializeIncidents(incidents);
  return incidents;
}
