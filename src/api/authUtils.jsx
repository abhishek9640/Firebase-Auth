import {sendPasswordResetEmail} from 'firebase/auth';
import { auth } from './firebase';

export const resetPasswordAPI = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return { success: true, message: "Password reset email sent. Please check your inbox." };
    } catch (error) {
      // Handle password reset errors
      return { success: false, message: "Password reset failed. Please check your email address." };
    }
  };