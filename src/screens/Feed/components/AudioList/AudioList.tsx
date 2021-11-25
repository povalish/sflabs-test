import { Layout } from '@ui/theme/Layout';
import React, { useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator, Dimensions, Text, View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Sound from 'react-native-sound';


import { Colors } from '@ui/theme/Colors';
import { Status } from '@domain/common/Status';
import { audioSamples } from '@domain/audio/mock/audioSamples';
import { Audio } from '@domain/audio/models/Audio';

import { styles } from './AudioList.styles';
import { RenderItemProp } from './types';
import { AudioCard } from '../AudioCard';



export const AudioList: React.FC = () => {
  const windowWidth = useMemo(() => Dimensions.get('screen').width, []);
  const [activeAudioIndex, setActiveAudioIndex] = useState(0);
  const [soundLibrary, setSoundLibrary] = useState<Audio[]>([]);
  const [soundLibraryStatus, setSoundLibraryStatus] = useState<Status>('init');



  /**
   * Используемая библиотека для воспроизведения звука (react-native-sound)
   * не может одновременно загружать файлы из сети и воспроизводить звук.
   *
   * Пути решения 2:
   * 1. грузить библиотеку звуков заранее (то, что выбрал я)
   * 2. использовать другой инструмент, чтобы загружать файлы в память и использовать с библиотекой
   */
  useEffect(() => {
    Sound.setCategory('Playback', true);

    let loadingSoundsCounter = audioSamples.length;
    setSoundLibraryStatus('loading');

    // Init sound instance and update loading sounds counter
    const initSound = (soundData: Audio) => new Sound(
      soundData.audioSource,
      undefined,
      (error) => {
        if (!error) { loadingSoundsCounter -= 1; }
        if (loadingSoundsCounter === 0) { setSoundLibraryStatus('loaded'); }
      },
    );

    const loadedLibrary = audioSamples.map((soundData) => ({
      ...soundData,
      audio: initSound(soundData),
    }));

    setSoundLibrary(loadedLibrary);
  }, []);



  const renderItem = ({ item, index }: RenderItemProp) => (
    <View key={item.id} style={styles.sliderItem}>
      <AudioCard
        audioData={item}
        shouldPlaying={index === activeAudioIndex}
      />
    </View>
  );



  // aliases
  const sliderWidth = windowWidth;
  const sliderItemWidth = sliderWidth - 40;


  return (
    <View style={[Layout.flexContainer]}>
      {soundLibraryStatus === 'loaded' && (
        <Carousel
          data={soundLibrary}
          renderItem={renderItem}
          sliderWidth={windowWidth}
          itemWidth={sliderItemWidth}
          onSnapToItem={setActiveAudioIndex}
          removeClippedSubviews={false}
        />
      )}

      {soundLibraryStatus === 'loading' && (
        <View style={styles.loader}>
          <Text style={styles.loaderText}>Идет загрузка аудио файлов</Text>
          <ActivityIndicator color={Colors.White} />
        </View>
      )}
    </View>
  );
};
