/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from "./core/BaseHttpRequest";
import type { OpenAPIConfig } from "./core/OpenAPI";
import { FetchHttpRequest } from "./core/FetchHttpRequest";

import { AccountCalendarsService } from "./services/AccountCalendarsService";
import { AccountDomainLookupsService } from "./services/AccountDomainLookupsService";
import { AccountNotificationsService } from "./services/AccountNotificationsService";
import { AccountReportsService } from "./services/AccountReportsService";
import { AccountsService } from "./services/AccountsService";
import { AccountsLtiService } from "./services/AccountsLtiService";
import { AdminsService } from "./services/AdminsService";
import { AnalyticsService } from "./services/AnalyticsService";
import { AnnouncementExternalFeedsService } from "./services/AnnouncementExternalFeedsService";
import { AnnouncementsService } from "./services/AnnouncementsService";
import { ApiTokenScopesService } from "./services/ApiTokenScopesService";
import { AppointmentGroupsService } from "./services/AppointmentGroupsService";
import { AssignmentExtensionsService } from "./services/AssignmentExtensionsService";
import { AssignmentGroupsService } from "./services/AssignmentGroupsService";
import { AssignmentsService } from "./services/AssignmentsService";
import { AuthenticationProvidersService } from "./services/AuthenticationProvidersService";
import { AuthenticationsLogService } from "./services/AuthenticationsLogService";
import { BlackoutDatesService } from "./services/BlackoutDatesService";
import { BlueprintCoursesService } from "./services/BlueprintCoursesService";
import { BookmarksService } from "./services/BookmarksService";
import { BrandConfigsService } from "./services/BrandConfigsService";
import { CalendarEventsService } from "./services/CalendarEventsService";
import { CollaborationsService } from "./services/CollaborationsService";
import { CommMessagesService } from "./services/CommMessagesService";
import { CommunicationChannelsService } from "./services/CommunicationChannelsService";
import { ConferencesService } from "./services/ConferencesService";
import { ContentExportsService } from "./services/ContentExportsService";
import { ContentMigrationsService } from "./services/ContentMigrationsService";
import { ContentSecurityPolicySettingsService } from "./services/ContentSecurityPolicySettingsService";
import { ContentSharesService } from "./services/ContentSharesService";
import { ConversationsService } from "./services/ConversationsService";
import { CourseAuditLogService } from "./services/CourseAuditLogService";
import { CoursePaceService } from "./services/CoursePaceService";
import { CourseQuizExtensionsService } from "./services/CourseQuizExtensionsService";
import { CoursesService } from "./services/CoursesService";
import { CustomGradebookColumnsService } from "./services/CustomGradebookColumnsService";
import { DiscussionTopicsService } from "./services/DiscussionTopicsService";
import { EnrollmentsService } from "./services/EnrollmentsService";
import { EnrollmentTermsService } from "./services/EnrollmentTermsService";
import { EPortfoliosService } from "./services/EPortfoliosService";
import { EPubExportsService } from "./services/EPubExportsService";
import { ErrorReportsService } from "./services/ErrorReportsService";
import { ExternalToolsService } from "./services/ExternalToolsService";
import { FavoritesService } from "./services/FavoritesService";
import { FeatureFlagsService } from "./services/FeatureFlagsService";
import { FilesService } from "./services/FilesService";
import { GradebookHistoryService } from "./services/GradebookHistoryService";
import { GradeChangeLogService } from "./services/GradeChangeLogService";
import { GradingPeriodsService } from "./services/GradingPeriodsService";
import { GradingPeriodSetsService } from "./services/GradingPeriodSetsService";
import { GradingStandardsService } from "./services/GradingStandardsService";
import { GroupCategoriesService } from "./services/GroupCategoriesService";
import { GroupsService } from "./services/GroupsService";
import { HistoryService } from "./services/HistoryService";
import { InstAccessTokensService } from "./services/InstAccessTokensService";
import { JwTsService } from "./services/JwTsService";
import { LineItemsService } from "./services/LineItemsService";
import { LiveAssessmentsService } from "./services/LiveAssessmentsService";
import { LoginsService } from "./services/LoginsService";
import { MediaObjectsService } from "./services/MediaObjectsService";
import { ModeratedGradingService } from "./services/ModeratedGradingService";
import { ModulesService } from "./services/ModulesService";
import { NamesAndRoleService } from "./services/NamesAndRoleService";
import { NewQuizItemsService } from "./services/NewQuizItemsService";
import { NewQuizzesService } from "./services/NewQuizzesService";
import { NotificationPreferencesService } from "./services/NotificationPreferencesService";
import { OriginalityReportsService } from "./services/OriginalityReportsService";
import { OutcomeGroupsService } from "./services/OutcomeGroupsService";
import { OutcomeImportsService } from "./services/OutcomeImportsService";
import { OutcomeResultsService } from "./services/OutcomeResultsService";
import { OutcomesService } from "./services/OutcomesService";
import { PagesService } from "./services/PagesService";
import { PeerReviewsService } from "./services/PeerReviewsService";
import { PlagiarismDetectionPlatformAssignmentsService } from "./services/PlagiarismDetectionPlatformAssignmentsService";
import { PlagiarismDetectionPlatformUsersService } from "./services/PlagiarismDetectionPlatformUsersService";
import { PlagiarismDetectionSubmissionsService } from "./services/PlagiarismDetectionSubmissionsService";
import { PlannerService } from "./services/PlannerService";
import { PollChoicesService } from "./services/PollChoicesService";
import { PollsService } from "./services/PollsService";
import { PollSessionsService } from "./services/PollSessionsService";
import { PollSubmissionsService } from "./services/PollSubmissionsService";
import { ProficiencyRatingsService } from "./services/ProficiencyRatingsService";
import { ProgressService } from "./services/ProgressService";
import { PublicJwkService } from "./services/PublicJwkService";
import { QuizAssignmentOverridesService } from "./services/QuizAssignmentOverridesService";
import { QuizExtensionsService } from "./services/QuizExtensionsService";
import { QuizIpFiltersService } from "./services/QuizIpFiltersService";
import { QuizQuestionGroupsService } from "./services/QuizQuestionGroupsService";
import { QuizQuestionsService } from "./services/QuizQuestionsService";
import { QuizReportsService } from "./services/QuizReportsService";
import { QuizStatisticsService } from "./services/QuizStatisticsService";
import { QuizSubmissionEventsService } from "./services/QuizSubmissionEventsService";
import { QuizSubmissionFilesService } from "./services/QuizSubmissionFilesService";
import { QuizSubmissionQuestionsService } from "./services/QuizSubmissionQuestionsService";
import { QuizSubmissionsService } from "./services/QuizSubmissionsService";
import { QuizzesService } from "./services/QuizzesService";
import { ResultService } from "./services/ResultService";
import { RolesService } from "./services/RolesService";
import { RubricsService } from "./services/RubricsService";
import { ScoreService } from "./services/ScoreService";
import { SearchService } from "./services/SearchService";
import { SectionsService } from "./services/SectionsService";
import { ServicesService } from "./services/ServicesService";
import { SharedBrandConfigsService } from "./services/SharedBrandConfigsService";
import { SisImportErrorsService } from "./services/SisImportErrorsService";
import { SisImportsService } from "./services/SisImportsService";
import { SisIntegrationService } from "./services/SisIntegrationService";
import { SubmissionCommentsService } from "./services/SubmissionCommentsService";
import { SubmissionsService } from "./services/SubmissionsService";
import { TabsService } from "./services/TabsService";
import { UserObserveesService } from "./services/UserObserveesService";
import { UsersService } from "./services/UsersService";
import { WebhooksSubscriptionsForPlagiarismPlatformService } from "./services/WebhooksSubscriptionsForPlagiarismPlatformService";

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class CanvasApi {
  public readonly accountCalendars: AccountCalendarsService;
  public readonly accountDomainLookups: AccountDomainLookupsService;
  public readonly accountNotifications: AccountNotificationsService;
  public readonly accountReports: AccountReportsService;
  public readonly accounts: AccountsService;
  public readonly accountsLti: AccountsLtiService;
  public readonly admins: AdminsService;
  public readonly analytics: AnalyticsService;
  public readonly announcementExternalFeeds: AnnouncementExternalFeedsService;
  public readonly announcements: AnnouncementsService;
  public readonly apiTokenScopes: ApiTokenScopesService;
  public readonly appointmentGroups: AppointmentGroupsService;
  public readonly assignmentExtensions: AssignmentExtensionsService;
  public readonly assignmentGroups: AssignmentGroupsService;
  public readonly assignments: AssignmentsService;
  public readonly authenticationProviders: AuthenticationProvidersService;
  public readonly authenticationsLog: AuthenticationsLogService;
  public readonly blackoutDates: BlackoutDatesService;
  public readonly blueprintCourses: BlueprintCoursesService;
  public readonly bookmarks: BookmarksService;
  public readonly brandConfigs: BrandConfigsService;
  public readonly calendarEvents: CalendarEventsService;
  public readonly collaborations: CollaborationsService;
  public readonly commMessages: CommMessagesService;
  public readonly communicationChannels: CommunicationChannelsService;
  public readonly conferences: ConferencesService;
  public readonly contentExports: ContentExportsService;
  public readonly contentMigrations: ContentMigrationsService;
  public readonly contentSecurityPolicySettings: ContentSecurityPolicySettingsService;
  public readonly contentShares: ContentSharesService;
  public readonly conversations: ConversationsService;
  public readonly courseAuditLog: CourseAuditLogService;
  public readonly coursePace: CoursePaceService;
  public readonly courseQuizExtensions: CourseQuizExtensionsService;
  public readonly courses: CoursesService;
  public readonly customGradebookColumns: CustomGradebookColumnsService;
  public readonly discussionTopics: DiscussionTopicsService;
  public readonly enrollments: EnrollmentsService;
  public readonly enrollmentTerms: EnrollmentTermsService;
  public readonly ePortfolios: EPortfoliosService;
  public readonly ePubExports: EPubExportsService;
  public readonly errorReports: ErrorReportsService;
  public readonly externalTools: ExternalToolsService;
  public readonly favorites: FavoritesService;
  public readonly featureFlags: FeatureFlagsService;
  public readonly files: FilesService;
  public readonly gradebookHistory: GradebookHistoryService;
  public readonly gradeChangeLog: GradeChangeLogService;
  public readonly gradingPeriods: GradingPeriodsService;
  public readonly gradingPeriodSets: GradingPeriodSetsService;
  public readonly gradingStandards: GradingStandardsService;
  public readonly groupCategories: GroupCategoriesService;
  public readonly groups: GroupsService;
  public readonly history: HistoryService;
  public readonly instAccessTokens: InstAccessTokensService;
  public readonly jwTs: JwTsService;
  public readonly lineItems: LineItemsService;
  public readonly liveAssessments: LiveAssessmentsService;
  public readonly logins: LoginsService;
  public readonly mediaObjects: MediaObjectsService;
  public readonly moderatedGrading: ModeratedGradingService;
  public readonly modules: ModulesService;
  public readonly namesAndRole: NamesAndRoleService;
  public readonly newQuizItems: NewQuizItemsService;
  public readonly newQuizzes: NewQuizzesService;
  public readonly notificationPreferences: NotificationPreferencesService;
  public readonly originalityReports: OriginalityReportsService;
  public readonly outcomeGroups: OutcomeGroupsService;
  public readonly outcomeImports: OutcomeImportsService;
  public readonly outcomeResults: OutcomeResultsService;
  public readonly outcomes: OutcomesService;
  public readonly pages: PagesService;
  public readonly peerReviews: PeerReviewsService;
  public readonly plagiarismDetectionPlatformAssignments: PlagiarismDetectionPlatformAssignmentsService;
  public readonly plagiarismDetectionPlatformUsers: PlagiarismDetectionPlatformUsersService;
  public readonly plagiarismDetectionSubmissions: PlagiarismDetectionSubmissionsService;
  public readonly planner: PlannerService;
  public readonly pollChoices: PollChoicesService;
  public readonly polls: PollsService;
  public readonly pollSessions: PollSessionsService;
  public readonly pollSubmissions: PollSubmissionsService;
  public readonly proficiencyRatings: ProficiencyRatingsService;
  public readonly progress: ProgressService;
  public readonly publicJwk: PublicJwkService;
  public readonly quizAssignmentOverrides: QuizAssignmentOverridesService;
  public readonly quizExtensions: QuizExtensionsService;
  public readonly quizIpFilters: QuizIpFiltersService;
  public readonly quizQuestionGroups: QuizQuestionGroupsService;
  public readonly quizQuestions: QuizQuestionsService;
  public readonly quizReports: QuizReportsService;
  public readonly quizStatistics: QuizStatisticsService;
  public readonly quizSubmissionEvents: QuizSubmissionEventsService;
  public readonly quizSubmissionFiles: QuizSubmissionFilesService;
  public readonly quizSubmissionQuestions: QuizSubmissionQuestionsService;
  public readonly quizSubmissions: QuizSubmissionsService;
  public readonly quizzes: QuizzesService;
  public readonly result: ResultService;
  public readonly roles: RolesService;
  public readonly rubrics: RubricsService;
  public readonly score: ScoreService;
  public readonly search: SearchService;
  public readonly sections: SectionsService;
  public readonly services: ServicesService;
  public readonly sharedBrandConfigs: SharedBrandConfigsService;
  public readonly sisImportErrors: SisImportErrorsService;
  public readonly sisImports: SisImportsService;
  public readonly sisIntegration: SisIntegrationService;
  public readonly submissionComments: SubmissionCommentsService;
  public readonly submissions: SubmissionsService;
  public readonly tabs: TabsService;
  public readonly userObservees: UserObserveesService;
  public readonly users: UsersService;
  public readonly webhooksSubscriptionsForPlagiarismPlatform: WebhooksSubscriptionsForPlagiarismPlatformService;

  public readonly request: BaseHttpRequest;

  constructor(
    config?: Partial<OpenAPIConfig>,
    HttpRequest: HttpRequestConstructor = FetchHttpRequest,
  ) {
    this.request = new HttpRequest({
      BASE: config?.BASE ?? "https://canvas.instructure.com/api",
      VERSION: config?.VERSION ?? "1.0",
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? "include",
      TOKEN: config?.TOKEN,
      USERNAME: config?.USERNAME,
      PASSWORD: config?.PASSWORD,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH,
    });

    this.accountCalendars = new AccountCalendarsService(this.request);
    this.accountDomainLookups = new AccountDomainLookupsService(this.request);
    this.accountNotifications = new AccountNotificationsService(this.request);
    this.accountReports = new AccountReportsService(this.request);
    this.accounts = new AccountsService(this.request);
    this.accountsLti = new AccountsLtiService(this.request);
    this.admins = new AdminsService(this.request);
    this.analytics = new AnalyticsService(this.request);
    this.announcementExternalFeeds = new AnnouncementExternalFeedsService(
      this.request,
    );
    this.announcements = new AnnouncementsService(this.request);
    this.apiTokenScopes = new ApiTokenScopesService(this.request);
    this.appointmentGroups = new AppointmentGroupsService(this.request);
    this.assignmentExtensions = new AssignmentExtensionsService(this.request);
    this.assignmentGroups = new AssignmentGroupsService(this.request);
    this.assignments = new AssignmentsService(this.request);
    this.authenticationProviders = new AuthenticationProvidersService(
      this.request,
    );
    this.authenticationsLog = new AuthenticationsLogService(this.request);
    this.blackoutDates = new BlackoutDatesService(this.request);
    this.blueprintCourses = new BlueprintCoursesService(this.request);
    this.bookmarks = new BookmarksService(this.request);
    this.brandConfigs = new BrandConfigsService(this.request);
    this.calendarEvents = new CalendarEventsService(this.request);
    this.collaborations = new CollaborationsService(this.request);
    this.commMessages = new CommMessagesService(this.request);
    this.communicationChannels = new CommunicationChannelsService(this.request);
    this.conferences = new ConferencesService(this.request);
    this.contentExports = new ContentExportsService(this.request);
    this.contentMigrations = new ContentMigrationsService(this.request);
    this.contentSecurityPolicySettings =
      new ContentSecurityPolicySettingsService(this.request);
    this.contentShares = new ContentSharesService(this.request);
    this.conversations = new ConversationsService(this.request);
    this.courseAuditLog = new CourseAuditLogService(this.request);
    this.coursePace = new CoursePaceService(this.request);
    this.courseQuizExtensions = new CourseQuizExtensionsService(this.request);
    this.courses = new CoursesService(this.request);
    this.customGradebookColumns = new CustomGradebookColumnsService(
      this.request,
    );
    this.discussionTopics = new DiscussionTopicsService(this.request);
    this.enrollments = new EnrollmentsService(this.request);
    this.enrollmentTerms = new EnrollmentTermsService(this.request);
    this.ePortfolios = new EPortfoliosService(this.request);
    this.ePubExports = new EPubExportsService(this.request);
    this.errorReports = new ErrorReportsService(this.request);
    this.externalTools = new ExternalToolsService(this.request);
    this.favorites = new FavoritesService(this.request);
    this.featureFlags = new FeatureFlagsService(this.request);
    this.files = new FilesService(this.request);
    this.gradebookHistory = new GradebookHistoryService(this.request);
    this.gradeChangeLog = new GradeChangeLogService(this.request);
    this.gradingPeriods = new GradingPeriodsService(this.request);
    this.gradingPeriodSets = new GradingPeriodSetsService(this.request);
    this.gradingStandards = new GradingStandardsService(this.request);
    this.groupCategories = new GroupCategoriesService(this.request);
    this.groups = new GroupsService(this.request);
    this.history = new HistoryService(this.request);
    this.instAccessTokens = new InstAccessTokensService(this.request);
    this.jwTs = new JwTsService(this.request);
    this.lineItems = new LineItemsService(this.request);
    this.liveAssessments = new LiveAssessmentsService(this.request);
    this.logins = new LoginsService(this.request);
    this.mediaObjects = new MediaObjectsService(this.request);
    this.moderatedGrading = new ModeratedGradingService(this.request);
    this.modules = new ModulesService(this.request);
    this.namesAndRole = new NamesAndRoleService(this.request);
    this.newQuizItems = new NewQuizItemsService(this.request);
    this.newQuizzes = new NewQuizzesService(this.request);
    this.notificationPreferences = new NotificationPreferencesService(
      this.request,
    );
    this.originalityReports = new OriginalityReportsService(this.request);
    this.outcomeGroups = new OutcomeGroupsService(this.request);
    this.outcomeImports = new OutcomeImportsService(this.request);
    this.outcomeResults = new OutcomeResultsService(this.request);
    this.outcomes = new OutcomesService(this.request);
    this.pages = new PagesService(this.request);
    this.peerReviews = new PeerReviewsService(this.request);
    this.plagiarismDetectionPlatformAssignments =
      new PlagiarismDetectionPlatformAssignmentsService(this.request);
    this.plagiarismDetectionPlatformUsers =
      new PlagiarismDetectionPlatformUsersService(this.request);
    this.plagiarismDetectionSubmissions =
      new PlagiarismDetectionSubmissionsService(this.request);
    this.planner = new PlannerService(this.request);
    this.pollChoices = new PollChoicesService(this.request);
    this.polls = new PollsService(this.request);
    this.pollSessions = new PollSessionsService(this.request);
    this.pollSubmissions = new PollSubmissionsService(this.request);
    this.proficiencyRatings = new ProficiencyRatingsService(this.request);
    this.progress = new ProgressService(this.request);
    this.publicJwk = new PublicJwkService(this.request);
    this.quizAssignmentOverrides = new QuizAssignmentOverridesService(
      this.request,
    );
    this.quizExtensions = new QuizExtensionsService(this.request);
    this.quizIpFilters = new QuizIpFiltersService(this.request);
    this.quizQuestionGroups = new QuizQuestionGroupsService(this.request);
    this.quizQuestions = new QuizQuestionsService(this.request);
    this.quizReports = new QuizReportsService(this.request);
    this.quizStatistics = new QuizStatisticsService(this.request);
    this.quizSubmissionEvents = new QuizSubmissionEventsService(this.request);
    this.quizSubmissionFiles = new QuizSubmissionFilesService(this.request);
    this.quizSubmissionQuestions = new QuizSubmissionQuestionsService(
      this.request,
    );
    this.quizSubmissions = new QuizSubmissionsService(this.request);
    this.quizzes = new QuizzesService(this.request);
    this.result = new ResultService(this.request);
    this.roles = new RolesService(this.request);
    this.rubrics = new RubricsService(this.request);
    this.score = new ScoreService(this.request);
    this.search = new SearchService(this.request);
    this.sections = new SectionsService(this.request);
    this.services = new ServicesService(this.request);
    this.sharedBrandConfigs = new SharedBrandConfigsService(this.request);
    this.sisImportErrors = new SisImportErrorsService(this.request);
    this.sisImports = new SisImportsService(this.request);
    this.sisIntegration = new SisIntegrationService(this.request);
    this.submissionComments = new SubmissionCommentsService(this.request);
    this.submissions = new SubmissionsService(this.request);
    this.tabs = new TabsService(this.request);
    this.userObservees = new UserObserveesService(this.request);
    this.users = new UsersService(this.request);
    this.webhooksSubscriptionsForPlagiarismPlatform =
      new WebhooksSubscriptionsForPlagiarismPlatformService(this.request);
  }
}
