import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: BoardState = {
    teams: [
        { id: 0, strikes: 0, score: 0 },
        { id: 1, strikes: 0, score: 0 },
    ],
    activeScore: 0,
    activeTeam: 1,
};

const teamSlice = createSlice({
    name: 'team',
    initialState: initialState as BoardState,
    reducers: {
        StrikesIncrement: (
            state: BoardState,
            action: PayloadAction<number>
        ) => {
            if (action.payload === 0 || action.payload === 1) {
                state.teams[action.payload].strikes =
                    state.teams[action.payload].strikes <= 2
                        ? state.teams[action.payload].strikes + 1
                        : 0;
            }
        },
    },
});

export const { StrikesIncrement } = teamSlice.actions;
export const selectTeam = (id: number) => {
    return (state: any) => {
        return state.team.teams[id];
    };
};
export default teamSlice.reducer;

export type BoardState = {
    teams: Team[];
    activeScore: number;
    activeTeam: number;
};

export interface Team {
    id: number;
    score: number;
    strikes: number;
}
