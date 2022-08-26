import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    patients : [
        {
          id: 1,
          name: "Steve Rice",
          dob: "1978-01-18",
          age: 44,
          gender: "Male",
          nationality: "Indian",
          symp: { cough: false, cold: false, stomachache: false, headache: false },
          pres: [
            {
              txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              visitDt: "Sun Jan 02 2022"
            },
            {
                txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                visitDt: "Fri Jul 01 2022"
            }
          ],
          nVisit: "Sat Oct 01 2022"
        },
        {
            id: 2,
            name: "John Belcher",
            dob: "1966-11-08",
            age: 56,
            gender: "Male",
          nationality: "American",
  symp: { cough: true, cold: false, stomachache: false, headache: false },
            pres: [
              {
                txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                visitDt: "Tue Jan 05 2019"
              },
              {
                txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                visitDt: "Sun Feb 02 2020"
             },
              {
                  txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                  visitDt: "Mon Aug 01 2022"
              }
            ],
            nVisit: "Fri Sep 01 2023"
        },
        {
            id: 3,
            name: "Shanon Stan",
            dob: "1974-03-30",
            age: 48,
            gender: "Female",
          nationality: "Australian",
  symp: { cough: true, cold: true, stomachache: true, headache: true },
            pres: [
              {
                txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                visitDt: "Thu Aug 06 2020"
              },
              {
                  txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                  visitDt: "Mon Feb 01 2021"
              },
              {
                txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                visitDt: "Tue Jun 01 2021"
            },
            {
                txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                visitDt: "Sat Jan 01 2022"
            },
            {
                txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                visitDt: "Sun May 01 2022"
            }
            ],
            nVisit: "Thu Dec 01 2022"
            
        }
      ]
      
}

export const patientSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
    addPatient: (state, action) => {
      state.patients = [...state.patients, action.payload]
    },
    deletePatient: (state) => {
      state.patients = state.patients.pop()
    },
    addPresNew: (state,action) => {
      let i = state.patients.findIndex(obj=>obj.id===action.payload.id);
      state.patients[i] = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addPatient, deletePatient, addPresNew } = patientSlice.actions

export default patientSlice.reducer