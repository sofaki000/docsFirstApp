import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get, remove } from "firebase/database";
import { store } from "../store/database";

const firebaseConfig = {
  apiKey: "AIzaSyDfbLdl6wOGf_3uPYvVbhoqdcWIiIlz6HY",
  authDomain: "docsfirstdb.firebaseapp.com",
  projectId: "docsfirstdb",
  storageBucket: "docsfirstdb.appspot.com",
  messagingSenderId: "371977791028",
  appId: "1:371977791028:web:62e6a26b5a34ba948ecc61",
  databaseURL:
    "https://docsfirstdb-default-rtdb.europe-west1.firebasedatabase.app/",
};

const incidents_collection_name = "incidents";
const violations_collection_name = "violations";
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export function addIncident(incidentObject) {
  const incident_id = incidentObject.name;
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

export async function getIncidents() {
  const dbRef = ref(getDatabase());
  let incidents = [{ name: "aaa" }];
  await get(child(dbRef, incidents_collection_name))
    .then((snapshot) => {
      if (snapshot.exists()) {
        incidents = snapshot.val();
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
