export const selectIssue = (issue) => {
    console.log('issue :', issue.task);
    return {
        type: 'ISSUE_SELECTED',
        payload: issue
    }
}