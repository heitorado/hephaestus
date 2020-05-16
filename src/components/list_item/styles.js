import colors from 'styles/colors';
import metrics from 'styles/metrics';

export default {
  listItem: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding / 2,
    margin: metrics.baseMargin / 2,
    flexDirection: 'row',
  },

  textContainer: {
    flex: 1,
    marginRight: metrics.baseMargin,
    marginLeft: metrics.baseMargin,
    justifyContent: 'space-between',
  },

  titleText: {
    fontSize: 18,
    fontWeight: '800',
  },

  subText: {
    color: 'gray',
    fontStyle: 'italic',
  },
};
