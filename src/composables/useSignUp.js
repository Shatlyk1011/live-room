import { ref } from "vue";
import { projectAuth } from "@/firebase/config";

const error = ref(null);

const signup = async (email, password, displayName) => {
  error.value = null;

  try {
    const response = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!response) {
      throw new Error("Could not complete the signup");
    }
    await response.user.updateProfile({ displayName: displayName });

    error.value = null;

    console.log(response.user);

    return response;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};

const useSignUp = () => {
  return { error, signup };
};

export default useSignUp;
