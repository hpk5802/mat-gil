import axios from '@/app/lib/instance';
import channelList from '@/app/constants/channelList';

export async function getRecommandedList() {
  try {
    const recommandedList = await Promise.all(
      channelList.map(async ({ key }) => {
        const { data } = await axios.get(`${key}/recommand`);
        return { channel: key, list: data.list };
      }),
    );

    return recommandedList;
  } catch (error) {
    console.error('데이터를 받아오는 중 에러가 발생했습니다.', error);
    return [];
  }
}
