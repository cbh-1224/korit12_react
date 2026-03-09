import { HelloProps } from './types';

export default function HelloComponent({name, age} : HelloProps) {

  return(
    <>
      안녕하세요 {name} 님. 당신은 {name}님은 올해 {age}살이 되었습니다.
    </>
  );
}