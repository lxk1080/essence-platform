import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const EnterpriseList = () => import('components/enterprise-list/enterprise-list');
const RecruitmentList = () => import('components/recruitment-list/recruitment-list');
const RecruitmentType = () => import('components/recruitment-type/recruitment-type');
const UserDetails = () => import('components/user-details/user-details');
const NewsList = () => import('components/news-list/news-list');
const SitesBanner = () => import('components/sites-banner/sites-banner');
const AppletsBanner = () => import('components/applets-banner/applets-banner');
const HomeMBanner = () => import('components/home-m-banner/home-m-banner');
const HomeBBanner = () => import('components/home-b-banner/home-b-banner');
const ActivityList = () => import('components/activity-list/activity-list');
const OrderList = () => import('components/order-list/order-list');
const PackageManagement = () => import('components/package-management/package-management');
const InvoiceManagement = () => import('components/invoice-management/invoice-management');
const DataStatistics = () => import('components/data-statistics/data-statistics');
const AccountManagement = () => import('components/account-management/account-management');
const AuthorityManagement = () => import('components/authority-management/authority-management');
const OperationLog = () => import('components/operation-log/operation-log');

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/enterprise-list',
    },
    {
      path: '/enterprise-list',
      component: EnterpriseList,
    },
    {
      path: '/recruitment-list',
      component: RecruitmentList,
    },
    {
      path: '/recruitment-type',
      component: RecruitmentType,
    },
    {
      path: '/user-details',
      component: UserDetails,
    },
    {
      path: '/news-list',
      component: NewsList,
    },
    {
      path: '/sites-banner',
      component: SitesBanner,
    },
    {
      path: '/applets-banner',
      component: AppletsBanner,
    },
    {
      path: '/home-m-banner',
      component: HomeMBanner,
    },
    {
      path: '/home-b-banner',
      component: HomeBBanner,
    },
    {
      path: '/activity-list',
      component: ActivityList,
    },
    {
      path: '/order-list',
      component: OrderList,
    },
    {
      path: '/package-management',
      component: PackageManagement,
    },
    {
      path: '/invoice-management',
      component: InvoiceManagement,
    },
    {
      path: '/data-statistics',
      component: DataStatistics,
    },
    {
      path: '/account-management',
      component: AccountManagement,
    },
    {
      path: '/authority-management',
      component: AuthorityManagement,
    },
    {
      path: '/operation-log',
      component: OperationLog,
    },
  ],
});
