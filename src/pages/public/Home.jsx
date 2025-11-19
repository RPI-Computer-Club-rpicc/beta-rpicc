import React from 'react';
import HeroArea from '../../components/home/HeroArea';
import MissionAndVision from '../../components/home/MissionAndVision';
import AboutBrief from '../../components/home/AboutBrief';
import SquadsBrief from '../../components/home/SquadsBrief';
import TopEvents from '../../components/home/TopEvents';
import TopProjects from '../../components/home/TopProjects';
import MaanagementHighlight from '../../components/home/MaanagementHighlight';
import MembershipInvitation from '../../components/common/MembershipInvitation';
import GallerySnapshot from '../../components/home/GallerySnapshot';
import QuickLinksResources from '../../components/home/QuickLinksResources';
import TestimonialsSnapshot from '../../components/home/TestimonialsSnapshot';
import VoiceFromPrincipal from '../../components/home/VoiceFromPrincipal';
import VoiceFromDepartmentHead from '../../components/home/VoiceFromDepartmentHead';
import VoiceFromDepartmentHead2ndShift from '../../components/home/VoiceFromDepartmentHead2ndShift';
import CTA_02 from '../../components/common/CTA_02';

// all section added


const Home = () => {


  return (
    <>
    <HeroArea />
    <MissionAndVision/>
    <AboutBrief/>
    <SquadsBrief/>
    <TopEvents/>
    <TopProjects/>
    <MaanagementHighlight/>
    <MembershipInvitation/>
    <GallerySnapshot/>
    <VoiceFromPrincipal/>
    <VoiceFromDepartmentHead2ndShift/>
    <VoiceFromDepartmentHead/>
    <TestimonialsSnapshot/>
    <QuickLinksResources/>
    <CTA_02/>
    </>
  );
};

export default Home;