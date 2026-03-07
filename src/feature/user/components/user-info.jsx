import { UserRoundPen, BookUser, Contact, Mail, Linkedin, Facebook } from 'lucide-react';
import InfoMenuItem from '../utils/info-menu-item';

function UserInfo({user}) {
  return (
    <section>
      <section className="h-15 flex items-center border-b">
        <span className="px-4 py-2 text-secondary-0 rounded">About</span>
      </section>
      <section className='mt-4'>
        <InfoMenuItem Icon={UserRoundPen} text={user?.name} />
        <InfoMenuItem Icon={BookUser} text={user?.address} />
        <InfoMenuItem Icon={Contact} text={user?.mobile} />
        <InfoMenuItem Icon={Mail} text={user?.email} />
        {/* <InfoMenuItem Icon={Linkedin} text={user.linkedIn} />
        <InfoMenuItem Icon={Facebook} text={user.facebook} /> */}
      </section>
    </section>
  );
}

export default UserInfo;
