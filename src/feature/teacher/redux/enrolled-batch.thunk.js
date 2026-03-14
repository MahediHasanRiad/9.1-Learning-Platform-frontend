export const fetchEnrolledBatch = async () => {
    try {
      const response = await axios.get('/api/v1/user/all-enrolled', {withCredentials: true})
      console.log('re', response.data.data)
      return response.data.data
    } catch (error) {
      console.log(error)
    }
  }