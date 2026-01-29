import axios from 'axios'

class IntegrationService {

  constructor() {
    this.fieldapURL = import.meta.env.VITE_FIELDAP_API_BASE_URL
  }

  setProject(projectId, subProjectId) {
    this.projectId = projectId
    const subProjectIdNoEvents = subProjectId.split(':')[0]
    this.subProjectId = subProjectIdNoEvents
  }

  setJWT(jwt) {
    this.jwt = jwt;
  }
}

// This is the exported instance of the data service
export default new IntegrationService()