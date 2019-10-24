export const LOGIN = 'LOGIN';

export const login = (email, password) => {
    return async dispatch => {
      const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBE0os_RocipBbzKICUrfpiOuXzd93rtzU',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
          })
        }
      );
  if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = 'Something went wrong!';
      if (errorId === 'EMAIL_NOT_FOUND') {
        message = 'This email could not be found!';
      } else if (errorId === 'INVALID_PASSWORD') {
        message = 'This password is not valid!';
      }
      throw new Error(message);
    }
        const resData = await response.json();
    console.log(resData);
    dispatch({ type: LOGIN, token: resData.idToken, userId: resData.localId });
    };
  };

// export const login = (email, password) => {
//   return async dispatch => {
//     const response = await fetch(

//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: email,
//           password: password,
//           returnSecureToken: true,
//         }),
//       },
//     );

//     if (!response.ok) {
//       const errorResData = await response.json();
//       const errorId = errorResData.error.message;
//       let message = 'Something went wrong!';
//       if (errorId === 'EMAIL_NOT_FOUND') {
//         message = 'This email could not be found!';
//       } else if (errorId === 'INVALID_PASSWORD') {
//         message = 'This password is not valid!';
//       }
//       throw new Error(message);
//     }

//     const resData = await response.json();
//     console.log(resData);
//     dispatch({type: LOGIN, token: resData.idToken, userId: resData.localId});
//   };
// };



// export const signup = (email, password) => {
//   return async dispatch => {
//     const response = await fetch(
//             'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBE0os_RocipBbzKICUrfpiOuXzd93rtzU',
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           email: email,
//           password: password,
//           returnSecureToken: true
//         })
//       }
//     );

//     if (!response.ok) {
//       throw new Error('Something went wrong!');
//     }

//     const resData = await response.json();
//     console.log(resData);
//     dispatch({ type: SIGNUP });
//   };
// };
