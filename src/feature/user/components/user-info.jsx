import { UserRoundPen, BookUser, Contact, Mail, Linkedin, Facebook } from 'lucide-react';
import InfoMenuItem from '../utils/info-menu-item';

function UserInfo() {
  return (
    <section>
      <section className="h-15 flex items-center border-b">
        <span className="px-4 py-2 text-secondary-0 bg-gray-200 rounded">About</span>
      </section>
      <section className='mt-4'>
        <InfoMenuItem Icon={UserRoundPen} text={'Mahedi Hasan Riad'} />
        <InfoMenuItem Icon={BookUser} text={'Uttora, Dhaka 1208'} />
        <InfoMenuItem Icon={Contact} text={'01518949131'} />
        <InfoMenuItem Icon={Mail} text={'riad@gmail.com'} />
        <InfoMenuItem Icon={Linkedin} text={'rst/abc.com'} />
        <InfoMenuItem Icon={Facebook} text={'rst/abc.com'} />
      </section>
    </section>
  );
}

export default UserInfo;
