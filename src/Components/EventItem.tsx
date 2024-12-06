import {moderateScale, scale, verticalScale} from '@/Helpers/Responsive';
import {Colors, Fonts} from '@/Theme';
import SVGByteCode from '@/Theme/SVGByteCode';
import _ from 'lodash';
import React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SvgFromXml} from 'react-native-svg';

interface EventItemProps {
  item: EventType;
  onPress: () => void;
}

export default ({item, onPress}: EventItemProps) => {
  return (
    <View style={styles.container}>
      <SvgFromXml xml={SVGByteCode.leftArrow} style={styles.rightArrowIcon} />
      <Image
        source={{
          uri: item.event_profile_img,
        }}
        style={styles.profileImage}
      />
      <View style={styles.detailRootContainer}>
        <Text style={styles.eventName}>{item?.event_name}</Text>
        <View style={styles.detailSubContainer}>
          <Text style={styles.date}>24.02.2022 - 26.02.2022</Text>
          <Text style={styles.countryTextStyle}>
            {`${item?.city}, ${item?.country}`}
          </Text>
        </View>
        <Text style={styles.priceTextStyle}>€30 - €100</Text>
        <View style={styles.bottomContainer}>
          <View style={styles.chipsContainer}>
            {_.map(item?.danceStyles, i => {
              return (
                <View
                  key={i?.ds_id}
                  style={{
                    backgroundColor: Colors.greyShadeF5,
                    borderRadius: moderateScale(50),
                    padding: scale(5),
                  }}>
                  <Text
                    style={{
                      fontSize: moderateScale(12),
                      color: Colors.blackShade181A,
                      fontFamily: Fonts.ThemeMedium,
                    }}>
                    {i.ds_name}
                  </Text>
                </View>
              );
            })}
          </View>
          <View style={styles.stepsContainer}>
            <TouchableOpacity onPress={() => Alert.alert('Coming Soon')}>
              <SvgFromXml xml={SVGByteCode.share} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress}>
              <SvgFromXml xml={SVGByteCode.heart(item.isFavorite === 1)} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: moderateScale(12),
    padding: scale(10),
    flexDirection: 'row',
    // alignItems: 'center',
    // because if the content is bigger then image looks weird in center
  },
  rightArrowIcon: {
    position: 'absolute',
    right: scale(5),
    top: scale(4),
  },
  profileImage: {
    width: verticalScale(80),
    height: verticalScale(80),
    borderRadius: moderateScale(4),
  },
  detailRootContainer: {
    flex: 1,
    marginLeft: scale(10),
    rowGap: scale(5),
  },
  eventName: {
    fontSize: moderateScale(16),
    color: Colors.blackShade18,
    fontFamily: Fonts.ThemeBold,
  },
  detailSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  date: {
    fontSize: moderateScale(12),
    color: Colors.greenShade34,
    fontFamily: Fonts.ThemeMedium,
  },
  countryTextStyle: {
    fontSize: moderateScale(11),
    color: Colors.greyShade82,
    fontFamily: Fonts.ThemeMedium,
  },
  priceTextStyle: {
    fontSize: moderateScale(11),
    color: Colors.greyShade82,
    fontFamily: Fonts.ThemeMedium,
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stepsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: scale(10),
    alignSelf: 'flex-end',
  },
  chipsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: scale(10),
  },
});
