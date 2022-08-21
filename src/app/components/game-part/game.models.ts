export interface Anime {
  anime_id: number,
  name: string,
  img: string
}

export interface GameRoom {
  room_id: number,
  name: string,
  creator_user: string,
  second_user?: string
  is_game_started: boolean,
  anime_list?: number[]
}

export enum RoomEvents {
  Create = 'create',
  Join = 'join',
  Error = 'error',
  Leave = 'leave',
  Update = 'update',
  GameStart = 'gameStart'
}

export interface RoomEventData<T> {
  event: RoomEvents,
  data: T
}
