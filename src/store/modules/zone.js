export const namespaced = true

export const state = {
    reports: []
}

export const mutations = {
    ADD_REPORT: (state, zone) => {
      state.reports.push(zone)
    }
}

export const actions = {
    addReport: ({ commit }, zone) => {
        commit('ADD_REPORT', zone)
    }
}
