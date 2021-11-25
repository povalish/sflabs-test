import Sound from 'react-native-sound';


export type Audio = {
  id: number;
  title: string;

  audioSource: string;
  audio?: Sound;
};
