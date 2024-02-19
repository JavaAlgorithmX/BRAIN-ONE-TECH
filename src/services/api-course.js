import axios from "axios";
import { useMutation, useQueryClient,useQuery } from '@tanstack/react-query'

const baseCourseUrl = "https://bts-backend.vercel.app/api/course";

const baseUrlLocal = "http://localhost:4000/api/course/create"

// create course using react query
export async function createCourse(courseData, token) {
  try {
    const response = await axios.post(`${baseUrlLocal}`, courseData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export function useCreateCourse() {
  const queryClient = useQueryClient();

  return useMutation(createCourse, {
    onSuccess: () => {
      // Invalidate and refetch the course list query
      queryClient.invalidateQueries('courseList');
    },
  });
}

export async function getCourseList(){
    try {
        const response = await axios.get(`${baseCourseUrl}/`,);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
}

export const useCourseList = () => {
  return useQuery(
    {
      queryKey: 'courseList',
      queryFn: getCourseList,
    }
    );
};

export async function getCourseById(id){
    try {
        const response = await axios.get(`${baseCourseUrl}/${id}`);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
}

export function useCourseById(id) {
  return useQuery(
    {
      queryKey: `course-${id}`,
      queryFn: () => getCourseById(id),
    }
  )
}

export async function enrollInToCourse(courseId, batchId, token) {
  
  try {
    const response = await axios.post(`${baseCourseUrl}/${courseId}/${batchId}/enroll`,{},{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("response ->",response);
    return response.data;
  } catch (error) {
    throw error;
  }
}