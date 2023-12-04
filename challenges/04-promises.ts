////////////////////////////////////////////////////
// 04 - Typing API promise responses
////////////////////////////////////////////////////

const ENDPOINT_URL = 'http://localhost:3000'

const fetchFromAPIEndpoint = async (endpoint: string) => {
    const res = await fetch(`${ENDPOINT_URL}${endpoint}`)

    if (res.statusText !== 'OK') {
        throw new Error()
    }

    const json: unknown = await res.json()

    return {
        status: res.status,
        statusText: res.statusText,
        json,
    }
}

const init = async () => {
    const { json: charactersList } = await fetchFromAPIEndpoint('/characters')
    const { json: episodesList } = await fetchFromAPIEndpoint('/episodes')

    /* No need to edit between these lines >>>>>>>>>>>>>>>>>>> */

    console.log('charactersList', charactersList)
    console.log('episodesList', episodesList)

    const allAges = charactersList.map((obj) => obj['age'])
    const avgAge = ((x) => Math.round(x))(
        allAges.reduce((a, b) => a + b) / allAges.length
    )
    const avgAgeRounded = Math.round(avgAge)
    console.log('avgAge', avgAgeRounded)

    const allGenders = charactersList.map((obj) => obj['gender'])
    const totalGenders = allGenders.reduce((a, b) => (++a[b], a), {
        M: 0,
        F: 0,
    })
    console.log('totalGenders', totalGenders)

    const episodeSeasonArr = episodesList.map((obj) => obj['season'])
    const episodesPerSeason = episodeSeasonArr.reduce(
        (a, b) => (b === 1 ? a[1]++ : a[2]++, a),
        {
            1: 0,
            2: 0,
        }
    )
    console.log('episodesPerSeason', episodesPerSeason)

    /* <<<<<<<<<<<<<<<<<<<< No need to edit between these lines */
}

init()

export default {}
