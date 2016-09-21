Sub RunAllInboxRules()
    Dim st As Outlook.Store
    Dim myRules As Outlook.Rules
    Dim rl As Outlook.Rule
    Dim count As Integer
    Dim ruleList As String
    'On Error Resume Next
     
    ' get default store (where rules live)
    Set st = Application.Session.DefaultStore
    ' get rules
    Set myRules = st.GetRules
     
    ' iterate all the rules
    For Each rl In myRules
        ' determine if it's an Inbox rule
        If rl.RuleType = olRuleReceive Then
            ' if so, run it
            rl.Execute
            count = count + 1
        End If
    Next
     
    Set rl = Nothing
    Set st = Nothing
    Set myRules = Nothing
End Sub
