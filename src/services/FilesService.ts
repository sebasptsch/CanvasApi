/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { File } from "../models/File";
import type { Folder } from "../models/Folder";
import type { License } from "../models/License";
import type { UsageRights } from "../models/UsageRights";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class FilesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List files
   * Returns the paginated list of files for the folder or course.
   * @param courseId ID
   * @param contentTypes Filter results by content-type. You can specify type/subtype pairs (e.g.,
   * 'image/jpeg'), or simply types (e.g., 'image', which will match
   * 'image/gif', 'image/jpeg', etc.).
   * @param excludeContentTypes Exclude given content-types from your results. You can specify type/subtype pairs (e.g.,
   * 'image/jpeg'), or simply types (e.g., 'image', which will match
   * 'image/gif', 'image/jpeg', etc.).
   * @param searchTerm The partial name of the files to match and return.
   * @param include Array of additional information to include.
   *
   * "user":: the user who uploaded the file or last edited its content
   * "usage_rights":: copyright and license information for the file (see UsageRights)
   * @param only Array of information to restrict to. Overrides include[]
   *
   * "names":: only returns file name information
   * @param sort Sort results by this field. Defaults to 'name'. Note that `sort=user` implies `include[]=user`.
   * @param order The sorting order. Defaults to 'asc'.
   * @returns File success
   * @throws ApiError
   */
  public listFilesCourses(
    courseId: string,
    contentTypes?: Array<string>,
    excludeContentTypes?: Array<string>,
    searchTerm?: string,
    include?: "user",
    only?: Array<string>,
    sort?:
      | "name"
      | "size"
      | "created_at"
      | "updated_at"
      | "content_type"
      | "user",
    order?: "asc" | "desc",
  ): CancelablePromise<Array<File>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/files",
      path: {
        course_id: courseId,
      },
      query: {
        content_types: contentTypes,
        exclude_content_types: excludeContentTypes,
        search_term: searchTerm,
        include: include,
        only: only,
        sort: sort,
        order: order,
      },
    });
  }

  /**
   * Set usage rights
   * Sets copyright and license information for one or more files
   * @param groupId ID
   * @param formData
   * @returns UsageRights success
   * @throws ApiError
   */
  public setUsageRightsGroups(
    groupId: string,
    formData: any,
  ): CancelablePromise<UsageRights> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/groups/{group_id}/usage_rights",
      path: {
        group_id: groupId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Remove usage rights
   * Removes copyright and license information associated with one or more files
   * @param groupId ID
   * @param fileIds List of ids of files to remove associated usage rights from.
   * @param folderIds List of ids of folders. Usage rights will be removed from all files in these folders.
   * @returns any success
   * @throws ApiError
   */
  public removeUsageRightsGroups(
    groupId: string,
    fileIds: Array<string>,
    folderIds?: Array<string>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/groups/{group_id}/usage_rights",
      path: {
        group_id: groupId,
      },
      query: {
        file_ids: fileIds,
        folder_ids: folderIds,
      },
    });
  }

  /**
   * Get file
   * Returns the standard attachment json object
   * @param userId ID
   * @param id ID
   * @param include Array of additional information to include.
   *
   * "user":: the user who uploaded the file or last edited its content
   * "usage_rights":: copyright and license information for the file (see UsageRights)
   * @param replacementChainContextType When a user replaces a file during upload, Canvas keeps track of the "replacement chain."
   *
   * Include this parameter if you wish Canvas to follow the replacement chain if the requested
   * file was deleted and replaced by another.
   *
   * Must be set to 'course' or 'account'. The "replacement_chain_context_id" parameter must
   * also be included.
   * @param replacementChainContextId When a user replaces a file during upload, Canvas keeps track of the "replacement chain."
   *
   * Include this parameter if you wish Canvas to follow the replacement chain if the requested
   * file was deleted and replaced by another.
   *
   * Indicates the context ID Canvas should use when following the "replacement chain." The
   * "replacement_chain_context_type" parameter must also be included.
   * @returns binary success
   * @throws ApiError
   */
  public getFileUsers(
    userId: string,
    id: string,
    include?: "user",
    replacementChainContextType?: string,
    replacementChainContextId?: number,
  ): CancelablePromise<Blob> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{user_id}/files/{id}",
      path: {
        user_id: userId,
        id: id,
      },
      query: {
        include: include,
        replacement_chain_context_type: replacementChainContextType,
        replacement_chain_context_id: replacementChainContextId,
      },
    });
  }

  /**
   * Get folder
   * Returns the details for a folder
   *
   * You can get the root folder from a context by using 'root' as the :id.
   * For example, you could get the root folder for a course like:
   * @param groupId ID
   * @param id ID
   * @returns Folder success
   * @throws ApiError
   */
  public getFolderGroups(
    groupId: string,
    id: string,
  ): CancelablePromise<Folder> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/groups/{group_id}/folders/{id}",
      path: {
        group_id: groupId,
        id: id,
      },
    });
  }

  /**
   * Get uploaded media folder for user
   * Returns the details for a designated upload folder that the user has rights to
   * upload to, and creates it if it doesn't exist.
   *
   * If the current user does not have the permissions to manage files
   * in the course or group, the folder will belong to the current user directly.
   * @param courseId ID
   * @returns Folder success
   * @throws ApiError
   */
  public getUploadedMediaFolderForUserCourses(
    courseId: string,
  ): CancelablePromise<Folder> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/folders/media",
      path: {
        course_id: courseId,
      },
    });
  }

  /**
   * Set usage rights
   * Sets copyright and license information for one or more files
   * @param courseId ID
   * @param formData
   * @returns UsageRights success
   * @throws ApiError
   */
  public setUsageRightsCourses(
    courseId: string,
    formData: any,
  ): CancelablePromise<UsageRights> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/courses/{course_id}/usage_rights",
      path: {
        course_id: courseId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Remove usage rights
   * Removes copyright and license information associated with one or more files
   * @param courseId ID
   * @param fileIds List of ids of files to remove associated usage rights from.
   * @param folderIds List of ids of folders. Usage rights will be removed from all files in these folders.
   * @returns any success
   * @throws ApiError
   */
  public removeUsageRightsCourses(
    courseId: string,
    fileIds: Array<string>,
    folderIds?: Array<string>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/courses/{course_id}/usage_rights",
      path: {
        course_id: courseId,
      },
      query: {
        file_ids: fileIds,
        folder_ids: folderIds,
      },
    });
  }

  /**
   * Resolve path
   * Given the full path to a folder, returns a list of all Folders in the path hierarchy,
   * starting at the root folder, and ending at the requested folder. The given path is
   * relative to the context's root folder and does not include the root folder's name
   * (e.g., "course files"). If an empty path is given, the context's root folder alone
   * is returned. Otherwise, if no folder exists with the given full path, a Not Found
   * error is returned.
   * @param userId ID
   * @returns Folder success
   * @throws ApiError
   */
  public resolvePathUsersFullPath(
    userId: string,
  ): CancelablePromise<Array<Folder>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{user_id}/folders/by_path/*full_path",
      path: {
        user_id: userId,
      },
    });
  }

  /**
   * Get folder
   * Returns the details for a folder
   *
   * You can get the root folder from a context by using 'root' as the :id.
   * For example, you could get the root folder for a course like:
   * @param courseId ID
   * @param id ID
   * @returns Folder success
   * @throws ApiError
   */
  public getFolderCourses(
    courseId: string,
    id: string,
  ): CancelablePromise<Folder> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/folders/{id}",
      path: {
        course_id: courseId,
        id: id,
      },
    });
  }

  /**
   * Get folder
   * Returns the details for a folder
   *
   * You can get the root folder from a context by using 'root' as the :id.
   * For example, you could get the root folder for a course like:
   * @param userId ID
   * @param id ID
   * @returns Folder success
   * @throws ApiError
   */
  public getFolderUsers(userId: string, id: string): CancelablePromise<Folder> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{user_id}/folders/{id}",
      path: {
        user_id: userId,
        id: id,
      },
    });
  }

  /**
   * Get folder
   * Returns the details for a folder
   *
   * You can get the root folder from a context by using 'root' as the :id.
   * For example, you could get the root folder for a course like:
   * @param id ID
   * @returns Folder success
   * @throws ApiError
   */
  public getFolderFolders(id: string): CancelablePromise<Folder> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/folders/{id}",
      path: {
        id: id,
      },
    });
  }

  /**
   * Update folder
   * Updates a folder
   * @param id ID
   * @param formData
   * @returns Folder success
   * @throws ApiError
   */
  public updateFolder(id: string, formData?: any): CancelablePromise<Folder> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/folders/{id}",
      path: {
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Delete folder
   * Remove the specified folder. You can only delete empty folders unless you
   * set the 'force' flag
   * @param id ID
   * @param force Set to 'true' to allow deleting a non-empty folder
   * @returns any success
   * @throws ApiError
   */
  public deleteFolder(id: string, force?: boolean): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/folders/{id}",
      path: {
        id: id,
      },
      query: {
        force: force,
      },
    });
  }

  /**
   * List folders
   * Returns the paginated list of folders in the folder.
   * @param id ID
   * @returns Folder success
   * @throws ApiError
   */
  public listFolders(id: string): CancelablePromise<Array<Folder>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/folders/{id}/folders",
      path: {
        id: id,
      },
    });
  }

  /**
   * Set usage rights
   * Sets copyright and license information for one or more files
   * @param userId ID
   * @param formData
   * @returns UsageRights success
   * @throws ApiError
   */
  public setUsageRightsUsers(
    userId: string,
    formData: any,
  ): CancelablePromise<UsageRights> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/users/{user_id}/usage_rights",
      path: {
        user_id: userId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Remove usage rights
   * Removes copyright and license information associated with one or more files
   * @param userId ID
   * @param fileIds List of ids of files to remove associated usage rights from.
   * @param folderIds List of ids of folders. Usage rights will be removed from all files in these folders.
   * @returns any success
   * @throws ApiError
   */
  public removeUsageRightsUsers(
    userId: string,
    fileIds: Array<string>,
    folderIds?: Array<string>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/users/{user_id}/usage_rights",
      path: {
        user_id: userId,
      },
      query: {
        file_ids: fileIds,
        folder_ids: folderIds,
      },
    });
  }

  /**
   * Create folder
   * Creates a folder in the specified context
   * @param folderId ID
   * @param formData
   * @returns Folder success
   * @throws ApiError
   */
  public createFolderFolders(
    folderId: string,
    formData: any,
  ): CancelablePromise<Folder> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/folders/{folder_id}/folders",
      path: {
        folder_id: folderId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Resolve path
   * Given the full path to a folder, returns a list of all Folders in the path hierarchy,
   * starting at the root folder, and ending at the requested folder. The given path is
   * relative to the context's root folder and does not include the root folder's name
   * (e.g., "course files"). If an empty path is given, the context's root folder alone
   * is returned. Otherwise, if no folder exists with the given full path, a Not Found
   * error is returned.
   * @param userId ID
   * @returns Folder success
   * @throws ApiError
   */
  public resolvePathUsers(userId: string): CancelablePromise<Array<Folder>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{user_id}/folders/by_path",
      path: {
        user_id: userId,
      },
    });
  }

  /**
   * List licenses
   * A paginated list of licenses that can be applied
   * @param userId ID
   * @returns License success
   * @throws ApiError
   */
  public listLicensesUsers(userId: string): CancelablePromise<Array<License>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{user_id}/content_licenses",
      path: {
        user_id: userId,
      },
    });
  }

  /**
   * Get public inline preview url
   * Determine the URL that should be used for inline preview of the file.
   * @param id ID
   * @param submissionId The id of the submission the file is associated with.  Provide this argument to gain access to a file
   * that has been submitted to an assignment (Canvas will verify that the file belongs to the submission
   * and the calling user has rights to view the submission).
   * @returns any success
   * @throws ApiError
   */
  public getPublicInlinePreviewUrl(
    id: string,
    submissionId?: number,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/files/{id}/public_url",
      path: {
        id: id,
      },
      query: {
        submission_id: submissionId,
      },
    });
  }

  /**
   * Get file
   * Returns the standard attachment json object
   * @param id ID
   * @param include Array of additional information to include.
   *
   * "user":: the user who uploaded the file or last edited its content
   * "usage_rights":: copyright and license information for the file (see UsageRights)
   * @param replacementChainContextType When a user replaces a file during upload, Canvas keeps track of the "replacement chain."
   *
   * Include this parameter if you wish Canvas to follow the replacement chain if the requested
   * file was deleted and replaced by another.
   *
   * Must be set to 'course' or 'account'. The "replacement_chain_context_id" parameter must
   * also be included.
   * @param replacementChainContextId When a user replaces a file during upload, Canvas keeps track of the "replacement chain."
   *
   * Include this parameter if you wish Canvas to follow the replacement chain if the requested
   * file was deleted and replaced by another.
   *
   * Indicates the context ID Canvas should use when following the "replacement chain." The
   * "replacement_chain_context_type" parameter must also be included.
   * @returns binary success
   * @throws ApiError
   */
  public getFileFiles(
    id: string,
    include?: "user",
    replacementChainContextType?: string,
    replacementChainContextId?: number,
  ): CancelablePromise<Blob> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/files/{id}",
      path: {
        id: id,
      },
      query: {
        include: include,
        replacement_chain_context_type: replacementChainContextType,
        replacement_chain_context_id: replacementChainContextId,
      },
    });
  }

  /**
   * Update file
   * Update some settings on the specified file
   * @param id ID
   * @param formData
   * @returns binary success
   * @throws ApiError
   */
  public updateFile(id: string, formData?: any): CancelablePromise<Blob> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/files/{id}",
      path: {
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Delete file
   * Remove the specified file. Unlike most other DELETE endpoints, using this
   * endpoint will result in comprehensive, irretrievable destruction of the file.
   * It should be used with the `replace` parameter set to true in cases where the
   * file preview also needs to be destroyed (such as to remove files that violate
   * privacy laws).
   * @param id ID
   * @param replace This action is irreversible.
   * If replace is set to true the file contents will be replaced with a
   * generic "file has been removed" file. This also destroys any previews
   * that have been generated for the file.
   * Must have manage files and become other users permissions
   * @returns binary success
   * @throws ApiError
   */
  public deleteFile(id: string, replace?: boolean): CancelablePromise<Blob> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/files/{id}",
      path: {
        id: id,
      },
      query: {
        replace: replace,
      },
    });
  }

  /**
   * Get uploaded media folder for user
   * Returns the details for a designated upload folder that the user has rights to
   * upload to, and creates it if it doesn't exist.
   *
   * If the current user does not have the permissions to manage files
   * in the course or group, the folder will belong to the current user directly.
   * @param groupId ID
   * @returns Folder success
   * @throws ApiError
   */
  public getUploadedMediaFolderForUserGroups(
    groupId: string,
  ): CancelablePromise<Folder> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/groups/{group_id}/folders/media",
      path: {
        group_id: groupId,
      },
    });
  }

  /**
   * List licenses
   * A paginated list of licenses that can be applied
   * @param groupId ID
   * @returns License success
   * @throws ApiError
   */
  public listLicensesGroups(
    groupId: string,
  ): CancelablePromise<Array<License>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/groups/{group_id}/content_licenses",
      path: {
        group_id: groupId,
      },
    });
  }

  /**
   * Get icon metadata
   * Returns the icon maker file attachment metadata
   * @param id ID
   * @returns any success
   * @throws ApiError
   */
  public getIconMetadata(id: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/files/{id}/icon_metadata",
      path: {
        id: id,
      },
    });
  }

  /**
   * Copy a file
   * Copy a file from elsewhere in Canvas into a folder.
   *
   * Copying a file across contexts (between courses and users) is permitted,
   * but the source and destination must belong to the same institution.
   * @param destFolderId ID
   * @param formData
   * @returns binary success
   * @throws ApiError
   */
  public copyFile(
    destFolderId: string,
    formData: any,
  ): CancelablePromise<Blob> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/folders/{dest_folder_id}/copy_file",
      path: {
        dest_folder_id: destFolderId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Resolve path
   * Given the full path to a folder, returns a list of all Folders in the path hierarchy,
   * starting at the root folder, and ending at the requested folder. The given path is
   * relative to the context's root folder and does not include the root folder's name
   * (e.g., "course files"). If an empty path is given, the context's root folder alone
   * is returned. Otherwise, if no folder exists with the given full path, a Not Found
   * error is returned.
   * @param groupId ID
   * @returns Folder success
   * @throws ApiError
   */
  public resolvePathGroupsFullPath(
    groupId: string,
  ): CancelablePromise<Array<Folder>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/groups/{group_id}/folders/by_path/*full_path",
      path: {
        group_id: groupId,
      },
    });
  }

  /**
   * Resolve path
   * Given the full path to a folder, returns a list of all Folders in the path hierarchy,
   * starting at the root folder, and ending at the requested folder. The given path is
   * relative to the context's root folder and does not include the root folder's name
   * (e.g., "course files"). If an empty path is given, the context's root folder alone
   * is returned. Otherwise, if no folder exists with the given full path, a Not Found
   * error is returned.
   * @param groupId ID
   * @returns Folder success
   * @throws ApiError
   */
  public resolvePathGroups(groupId: string): CancelablePromise<Array<Folder>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/groups/{group_id}/folders/by_path",
      path: {
        group_id: groupId,
      },
    });
  }

  /**
   * Resolve path
   * Given the full path to a folder, returns a list of all Folders in the path hierarchy,
   * starting at the root folder, and ending at the requested folder. The given path is
   * relative to the context's root folder and does not include the root folder's name
   * (e.g., "course files"). If an empty path is given, the context's root folder alone
   * is returned. Otherwise, if no folder exists with the given full path, a Not Found
   * error is returned.
   * @param courseId ID
   * @returns Folder success
   * @throws ApiError
   */
  public resolvePathCoursesFullPath(
    courseId: string,
  ): CancelablePromise<Array<Folder>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/folders/by_path/*full_path",
      path: {
        course_id: courseId,
      },
    });
  }

  /**
   * Copy a folder
   * Copy a folder (and its contents) from elsewhere in Canvas into a folder.
   *
   * Copying a folder across contexts (between courses and users) is permitted,
   * but the source and destination must belong to the same institution.
   * If the source and destination folders are in the same context, the
   * source folder may not contain the destination folder. A folder will be
   * renamed at its destination if another folder with the same name already
   * exists.
   * @param destFolderId ID
   * @param formData
   * @returns Folder success
   * @throws ApiError
   */
  public copyFolder(
    destFolderId: string,
    formData: any,
  ): CancelablePromise<Folder> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/folders/{dest_folder_id}/copy_folder",
      path: {
        dest_folder_id: destFolderId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * List files
   * Returns the paginated list of files for the folder or course.
   * @param id ID
   * @param contentTypes Filter results by content-type. You can specify type/subtype pairs (e.g.,
   * 'image/jpeg'), or simply types (e.g., 'image', which will match
   * 'image/gif', 'image/jpeg', etc.).
   * @param excludeContentTypes Exclude given content-types from your results. You can specify type/subtype pairs (e.g.,
   * 'image/jpeg'), or simply types (e.g., 'image', which will match
   * 'image/gif', 'image/jpeg', etc.).
   * @param searchTerm The partial name of the files to match and return.
   * @param include Array of additional information to include.
   *
   * "user":: the user who uploaded the file or last edited its content
   * "usage_rights":: copyright and license information for the file (see UsageRights)
   * @param only Array of information to restrict to. Overrides include[]
   *
   * "names":: only returns file name information
   * @param sort Sort results by this field. Defaults to 'name'. Note that `sort=user` implies `include[]=user`.
   * @param order The sorting order. Defaults to 'asc'.
   * @returns File success
   * @throws ApiError
   */
  public listFilesFolders(
    id: string,
    contentTypes?: Array<string>,
    excludeContentTypes?: Array<string>,
    searchTerm?: string,
    include?: "user",
    only?: Array<string>,
    sort?:
      | "name"
      | "size"
      | "created_at"
      | "updated_at"
      | "content_type"
      | "user",
    order?: "asc" | "desc",
  ): CancelablePromise<Array<File>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/folders/{id}/files",
      path: {
        id: id,
      },
      query: {
        content_types: contentTypes,
        exclude_content_types: excludeContentTypes,
        search_term: searchTerm,
        include: include,
        only: only,
        sort: sort,
        order: order,
      },
    });
  }

  /**
   * Get file
   * Returns the standard attachment json object
   * @param groupId ID
   * @param id ID
   * @param include Array of additional information to include.
   *
   * "user":: the user who uploaded the file or last edited its content
   * "usage_rights":: copyright and license information for the file (see UsageRights)
   * @param replacementChainContextType When a user replaces a file during upload, Canvas keeps track of the "replacement chain."
   *
   * Include this parameter if you wish Canvas to follow the replacement chain if the requested
   * file was deleted and replaced by another.
   *
   * Must be set to 'course' or 'account'. The "replacement_chain_context_id" parameter must
   * also be included.
   * @param replacementChainContextId When a user replaces a file during upload, Canvas keeps track of the "replacement chain."
   *
   * Include this parameter if you wish Canvas to follow the replacement chain if the requested
   * file was deleted and replaced by another.
   *
   * Indicates the context ID Canvas should use when following the "replacement chain." The
   * "replacement_chain_context_type" parameter must also be included.
   * @returns binary success
   * @throws ApiError
   */
  public getFileGroups(
    groupId: string,
    id: string,
    include?: "user",
    replacementChainContextType?: string,
    replacementChainContextId?: number,
  ): CancelablePromise<Blob> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/groups/{group_id}/files/{id}",
      path: {
        group_id: groupId,
        id: id,
      },
      query: {
        include: include,
        replacement_chain_context_type: replacementChainContextType,
        replacement_chain_context_id: replacementChainContextId,
      },
    });
  }

  /**
   * List all folders
   * Returns the paginated list of all folders for the given context. This will
   * be returned as a flat list containing all subfolders as well.
   * @param userId ID
   * @returns Folder success
   * @throws ApiError
   */
  public listAllFoldersUsers(userId: string): CancelablePromise<Array<Folder>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{user_id}/folders",
      path: {
        user_id: userId,
      },
    });
  }

  /**
   * Create folder
   * Creates a folder in the specified context
   * @param userId ID
   * @param formData
   * @returns Folder success
   * @throws ApiError
   */
  public createFolderUsers(
    userId: string,
    formData: any,
  ): CancelablePromise<Folder> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/users/{user_id}/folders",
      path: {
        user_id: userId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Upload a file
   * Upload a file to a folder.
   *
   * This API endpoint is the first step in uploading a file.
   * See the {file:file_uploads.html File Upload Documentation} for details on
   * the file upload workflow.
   *
   * Only those with the "Manage Files" permission on a course or group can
   * upload files to a folder in that course or group.
   * @param folderId ID
   * @returns any success
   * @throws ApiError
   */
  public uploadFile(folderId: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/folders/{folder_id}/files",
      path: {
        folder_id: folderId,
      },
    });
  }

  /**
   * List licenses
   * A paginated list of licenses that can be applied
   * @param courseId ID
   * @returns License success
   * @throws ApiError
   */
  public listLicensesCourses(
    courseId: string,
  ): CancelablePromise<Array<License>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/content_licenses",
      path: {
        course_id: courseId,
      },
    });
  }

  /**
   * List all folders
   * Returns the paginated list of all folders for the given context. This will
   * be returned as a flat list containing all subfolders as well.
   * @param groupId ID
   * @returns Folder success
   * @throws ApiError
   */
  public listAllFoldersGroups(
    groupId: string,
  ): CancelablePromise<Array<Folder>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/groups/{group_id}/folders",
      path: {
        group_id: groupId,
      },
    });
  }

  /**
   * Create folder
   * Creates a folder in the specified context
   * @param groupId ID
   * @param formData
   * @returns Folder success
   * @throws ApiError
   */
  public createFolderGroups(
    groupId: string,
    formData: any,
  ): CancelablePromise<Folder> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/groups/{group_id}/folders",
      path: {
        group_id: groupId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Translate file reference
   * Get information about a file from a course copy file reference
   * @param courseId ID
   * @param migrationId ID
   * @returns binary success
   * @throws ApiError
   */
  public translateFileReference(
    courseId: string,
    migrationId: string,
  ): CancelablePromise<Blob> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/files/file_ref/{migration_id}",
      path: {
        course_id: courseId,
        migration_id: migrationId,
      },
    });
  }

  /**
   * Resolve path
   * Given the full path to a folder, returns a list of all Folders in the path hierarchy,
   * starting at the root folder, and ending at the requested folder. The given path is
   * relative to the context's root folder and does not include the root folder's name
   * (e.g., "course files"). If an empty path is given, the context's root folder alone
   * is returned. Otherwise, if no folder exists with the given full path, a Not Found
   * error is returned.
   * @param courseId ID
   * @returns Folder success
   * @throws ApiError
   */
  public resolvePathCourses(
    courseId: string,
  ): CancelablePromise<Array<Folder>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/folders/by_path",
      path: {
        course_id: courseId,
      },
    });
  }

  /**
   * List all folders
   * Returns the paginated list of all folders for the given context. This will
   * be returned as a flat list containing all subfolders as well.
   * @param courseId ID
   * @returns Folder success
   * @throws ApiError
   */
  public listAllFoldersCourses(
    courseId: string,
  ): CancelablePromise<Array<Folder>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/folders",
      path: {
        course_id: courseId,
      },
    });
  }

  /**
   * Create folder
   * Creates a folder in the specified context
   * @param courseId ID
   * @param formData
   * @returns Folder success
   * @throws ApiError
   */
  public createFolderCourses(
    courseId: string,
    formData: any,
  ): CancelablePromise<Folder> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/courses/{course_id}/folders",
      path: {
        course_id: courseId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Reset link verifier
   * Resets the link verifier. Any existing links to the file using
   * the previous hard-coded "verifier" parameter will no longer
   * automatically grant access.
   *
   * Must have manage files and become other users permissions
   * @param id ID
   * @returns binary success
   * @throws ApiError
   */
  public resetLinkVerifier(id: string): CancelablePromise<Blob> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/files/{id}/reset_verifier",
      path: {
        id: id,
      },
    });
  }

  /**
   * Get quota information
   * Returns the total and used storage quota for the course, group, or user.
   * @param courseId ID
   * @returns any success
   * @throws ApiError
   */
  public getQuotaInformationCourses(courseId: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/files/quota",
      path: {
        course_id: courseId,
      },
    });
  }

  /**
   * Get quota information
   * Returns the total and used storage quota for the course, group, or user.
   * @param groupId ID
   * @returns any success
   * @throws ApiError
   */
  public getQuotaInformationGroups(groupId: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/groups/{group_id}/files/quota",
      path: {
        group_id: groupId,
      },
    });
  }

  /**
   * Get quota information
   * Returns the total and used storage quota for the course, group, or user.
   * @param userId ID
   * @returns any success
   * @throws ApiError
   */
  public getQuotaInformationUsers(userId: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{user_id}/files/quota",
      path: {
        user_id: userId,
      },
    });
  }

  /**
   * Get file
   * Returns the standard attachment json object
   * @param courseId ID
   * @param id ID
   * @param include Array of additional information to include.
   *
   * "user":: the user who uploaded the file or last edited its content
   * "usage_rights":: copyright and license information for the file (see UsageRights)
   * @param replacementChainContextType When a user replaces a file during upload, Canvas keeps track of the "replacement chain."
   *
   * Include this parameter if you wish Canvas to follow the replacement chain if the requested
   * file was deleted and replaced by another.
   *
   * Must be set to 'course' or 'account'. The "replacement_chain_context_id" parameter must
   * also be included.
   * @param replacementChainContextId When a user replaces a file during upload, Canvas keeps track of the "replacement chain."
   *
   * Include this parameter if you wish Canvas to follow the replacement chain if the requested
   * file was deleted and replaced by another.
   *
   * Indicates the context ID Canvas should use when following the "replacement chain." The
   * "replacement_chain_context_type" parameter must also be included.
   * @returns binary success
   * @throws ApiError
   */
  public getFileCourses(
    courseId: string,
    id: string,
    include?: "user",
    replacementChainContextType?: string,
    replacementChainContextId?: number,
  ): CancelablePromise<Blob> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/files/{id}",
      path: {
        course_id: courseId,
        id: id,
      },
      query: {
        include: include,
        replacement_chain_context_type: replacementChainContextType,
        replacement_chain_context_id: replacementChainContextId,
      },
    });
  }
}
