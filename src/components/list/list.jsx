
export const OrderedLists = ({ list }) => {
    return (
        <ol>
            {/* <ListItems /> */}
            {
                list.map((eachList, index) => <li key={index}>{eachList}</li>)
            }
        </ol>
    )
}

export const UnorderedLists = () => {
    return (
        <ul>
            <ListItems />
        </ul>
    )
}

const ListItems = () => {
    const teams = [
        {
            teamName: "SRH",
            teamPlayers: ["Cummins", "Jadeja", "raina"],
            wonCount: 5,
            wonYear: [2015, 2020, 2022, 2024],
            teamLogo: "https://static.toiimg.com/thumb/msid-72902421,width-400,resizemode-4/72902421.jpg"
        },
        {
            teamName: 'RCB',
            teamPlayers: ["Cummins", "Jadeja", "raina"],
            wonCount: 5,
            wonYear: [2015, 2020, 2022, 2024],
            teamLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUfpDPZ5AwBAPHlCvq7CrA4guqST4CaBAOYw&s"
        },
        {
            teamName: 'JCB',
            teamPlayers: ["Cummins", "Jadeja", "raina"],
            wonCount: 2,
            wonYear: [2015, 2020, 2022, 2024],
            teamLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUfpDPZ5AwBAPHlCvq7CrA4guqST4CaBAOYw&s"
        },
        {
            teamName: 'KCB',
            teamPlayers: ["Cummins", "Jadeja", "raina"],
            wonCount: 6,
            wonYear: [2015, 2020, 2022, 2024],
            teamLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUfpDPZ5AwBAPHlCvq7CrA4guqST4CaBAOYw&s"
        }
    ]
    const filterTeams = (teams) => {
        const newTeams = teams.filter((eachTeams) => eachTeams.wonCount >= 5)
        return newTeams
    }
    return (
        <div>
            {
                filterTeams(teams).map((eachTeam, index) => {
                    return (
                        <div key={index}>
                            <img src={eachTeam.teamLogo} alt={eachTeam.teamName} height={50} width={50} style={{ borderRadius: "50%" }} />
                            <h4>{eachTeam.teamName}</h4>
                            {
                                eachTeam.teamPlayers.map((eachTeamPlayer, index) => {
                                    return (
                                        <div key={index}>
                                            <li>{eachTeamPlayer}</li>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}