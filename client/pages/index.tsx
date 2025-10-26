import React from 'react';
import MainLayout from '../layouts/MainLayout';
import CalcComponent from '../components/CalcComponent';
import OtherMetrics from '../components/OtherMetrics';
import CompareResults from '../components/CompareResults';
import UnitEconomics from '../components/UnitEconomics';
import BlockQuestions from '../components/BlockQuestions';
import Formula from '../components/Formula';
import Metricks from "../components/Metricks";

 const Index = () => {
  return (
    <MainLayout>
      <CalcComponent />
      <Formula/>
      <Metricks />
      <OtherMetrics />
      <CompareResults />
      <UnitEconomics />
      <BlockQuestions/>
    </MainLayout>
  )
}
export default Index;
