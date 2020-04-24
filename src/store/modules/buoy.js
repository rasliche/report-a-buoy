export const namespaced = true

export const state = {
    reports: [
        { id: 'm1', bStatus: 'clean', pulStatus: 'damaged', dlStatus: 'good', aStatus: 'good', date: new Date(), notes: 'n/a' },
        { id: 'm2', bStatus: 'clean', pulStatus: 'good', dlStatus: 'good', aStatus: 'good', date: new Date(), notes: 'n/a' },
        { id: 'm4', bStatus: 'clean', pulStatus: 'good', dlStatus: 'good', aStatus: 'good', date: new Date(), notes: 'n/a' },
        { id: 'm4', bStatus: 'dirty', pulStatus: 'good', dlStatus: 'good', aStatus: 'good', date: new Date(), notes: 'n/a' },
        { id: 'm7', bStatus: 'clean', pulStatus: 'good', dlStatus: 'good', aStatus: 'bent', date: new Date(), notes: 'n/a' },
        { id: 'm9', bStatus: 'clean', pulStatus: 'good', dlStatus: 'good', aStatus: 'good', date: new Date(), notes: 'n/a' },
    ]
}

export const mutations = {
    ADD_BUOY: (state, buoy) => {
        state.reports.push(buoy)
    }
}

export const actions = {
    addBuoy: ({ commit }, buoy) => {
        commit('ADD_BUOY', buoy)
    }
}
