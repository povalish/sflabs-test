import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import {
  ActivityIndicator, Text, TouchableOpacity, View,
} from 'react-native';
import Sound from 'react-native-sound';

import { styles } from './AudioCard.styles';
import { GradientCard } from '@ui/components/GradientCard';
import { Audio } from '@domain/audio/models/Audio';
import { Colors } from '@ui/theme/Colors';



interface IAudioCard {
  audioData: Audio;
  shouldPlaying: boolean;
}

export const AudioCard: React.FC<IAudioCard> = ({ audioData, shouldPlaying }) => {
  const [isPlaying, setIsPlaying] = useState(false);


  useEffect(() => {
    audioData.audio?.setVolume(1);
  }, []);

  useEffect(() => {
    // Выключил это правило только для этих двух строк
    // т.к. JavaScript позволяет использовать функции до их фактичного объявления.
    // Если следовать правилу ESLint, то в коде возникнет мешанина из useEffect'ов
    // и используемых функций. Хотелось бы разделять эффекты от другого кода.
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    if (shouldPlaying) { playSound(); }
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    if (!shouldPlaying) { pauseSound(); }
  }, [shouldPlaying]);


  const pauseSound = () => {
    setIsPlaying(false);
    audioData.audio?.pause();
  };

  const playSound = () => {
    setIsPlaying(true);
    audioData.audio?.setCurrentTime(0);
    audioData.audio?.play(() => pauseSound());
  };

  const toggleSoundPlay = () => {
    if (isPlaying) { pauseSound(); }
    if (!isPlaying) { playSound(); }
  };



  return (
    <GradientCard style={styles.card}>
      <Text style={styles.cardText}>{audioData.title}</Text>
      <TouchableOpacity onPress={toggleSoundPlay}>
        <Text style={{
          color: Colors.Black, fontWeight: 'bold', fontSize: 18, marginTop: 10,
        }}
        >
          {isPlaying && 'Stop'}
          {!isPlaying && 'Play'}
        </Text>
      </TouchableOpacity>
    </GradientCard>
  );
};
