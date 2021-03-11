// import React, { useState } from 'react';
// import { ApolloProvider, useMutation, gql } from '@apollo/client';

// const ADDNEW_MUTATION = gql`
//   mutation PostMutation(
//     $date: String!
//     $time: String!
//     $city: String!
//     $state: state!
//     $headline: String!
//     $description: String!
//     $category: String!
//     $source: String!
//     $actions: String!
//     $images: Array!
//     $type: String!
//     $coordinates: Array!
//   ) {
//     post(date: $date, 
//       time: $time, 
//       city: $city, 
//       state: $state,
//       headline: $headline, 
//       description: $description,
//       category: $category, 
//       source: $source,
//       actions: $actions,
//       images: $images, 
//       type: $type,
//       coordinates: $coordinates) {
//       id
//       date
//       time 
//       city 
//       state
//       headline
//       description
//       category
//       source 
//       actions
//       images
//       type
//       coordinates
//     }
//   }
// `;

// const Addnew = () => {
//   const [formState, setFormState] = useState({
//     date: '',
//     time: '',
//     city: '',
//     state: '',
//     headline: '',
//     description: '',
//     category: '',
//     source: '',
//     actions: '',
//     images: [],
//     type: '',
//     coordinates: []
//   });

//   const [addNewEvent] = useMutation(ADDNEW_MUTATION, {
//     variables: {
//       date: formState.date, 
//       time: formState.time, 
//       city: formState.city, 
//       state: formState.state,
//       headline: formState.headline, 
//       description: formState.description,
//       category: formState.category, 
//       source: formState.source,
//       actions: formState.actions,
//       images: formState.images, 
//       type: formState.type,
//       coordinates: formState.coordinates
//     }
//   })

//   return (
//     <div>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault()
//           addNewEvent()
//         }}
//       >
//         <div >
//           <br/> <input
//             style={{ border: '1px solid purple' }}
//             value={formState.date}
//             onChange={(e) =>
//               setFormState({
//                 ...formState,
//                 date: e.target.value
//               })
//             }
//             type="text"
//             placeholder="date"
//           />
//           <br/> <input
//             style={{ border: '1px solid purple' }}
//             value={formState.time}
//             onChange={(e) =>
//               setFormState({
//                 ...formState,
//                 time: e.target.value
//               })
//             }
//             type="text"
//             placeholder="time"
//           />
//            <br/> <input
//             style={{ border: '1px solid purple' }}
//             value={formState.desccityription}
//             onChange={(e) =>
//               setFormState({
//                 ...formState,
//                 city: e.target.value
//               })
//             }
//             type="text"
//             placeholder="city"
//           />
//           <br/> <input
//             style={{ border: '1px solid purple' }}
//             value={formState.state}
//             onChange={(e) =>
//               setFormState({
//                 ...formState,
//                 state: e.target.value
//               })
//             }
//             type="text"
//             placeholder="state"
//           />
//            <br/> <input
//             style={{ border: '1px solid purple' }}
//             value={formState.headline}
//             onChange={(e) =>
//               setFormState({
//                 ...formState,
//                 headline: e.target.value
//               })
//             }
//             type="text"
//             placeholder="headline"
//           />
//           <br/> <input
//             style={{ border: '1px solid purple' }}
//             value={formState.description}
//             onChange={(e) =>
//               setFormState({
//                 ...formState,
//                 description: e.target.value
//               })
//             }
//             type="text"
//             placeholder="description"
//           />
//            <br/> <input
//             style={{ border: '1px solid purple' }}
//             value={formState.category}
//             onChange={(e) =>
//               setFormState({
//                 ...formState,
//                 category: e.target.value
//               })
//             }
//             type="text"
//             placeholder="category"
//           />
//           <br/> <input
//             style={{ border: '1px solid purple' }}
//             value={formState.source}
//             onChange={(e) =>
//               setFormState({
//                 ...formState,
//                 source: e.target.value
//               })
//             }
//             type="text"
//             placeholder="source"
//           />
//            <br/> <input
//             style={{ border: '1px solid purple' }}
//             value={formState.actions}
//             onChange={(e) =>
//               setFormState({
//                 ...formState,
//                 actions: e.target.value
//               })
//             }
//             type="text"
//             placeholder="actions"
//           />
//           <br/> <input
//             style={{ border: '1px solid purple' }}
//             value={formState.images}
//             onChange={(e) =>
//               setFormState({
//                 ...formState,
//                 images: [e.target.value]
//               })
//             }
//             type="text"
//             placeholder="image link"
//           />
//            <br/> <input
//             style={{ border: '1px solid purple' }}
//             value={formState.type}
//             onChange={(e) =>
//               setFormState({
//                 ...formState,
//                 type: e.target.value
//               })
//             }
//             type="text"
//             placeholder="type"
//           />
//            <br/> <input
//             style={{ border: '1px solid purple' }}
//             value={formState.coordinates}
//             onChange={(e) =>
//               setFormState({
//                 ...formState,
//                 coordinates: e.target.value.split(',')
//               })
//             }
//             type="text"
//             placeholder="coordinates"
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Addnew;