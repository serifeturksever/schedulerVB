$headers = New-Object "System.Collections.Generic.Dictionary[[String],[String]]"
$headers.Add("Authorization", "Bearer eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IkIwMjgyIiwiYWNjZXNzX2xldmVsIjoiUmVhZCIsInNjb3BlIjoiZGVwbG95OioiLCJleHAiOjIzNDkyNDUyNzV9.PXIzOoyHN0f_AJc-HFT6YMRF8MVASvXF2s2dwOcwTGvOrI59KUwqH29SqhCHWZfv")
$body = @{
              UygulamaAdi= "Vakıfbank Web Sitesi"
              ModulAdi= "UNIGATE WEB Sunucu Grubu"
              CiAdi= "UnigateWebAppPool"
              OrtamAdi= "Test"
 }

$response = Invoke-RestMethod 'konfigurasyonapi.vakifbank.intra/api/v1.0/SDeploy/GetirDeploySunucuDetayBilgi' -Method 'POST' -Headers $headers -Body (ConvertTo-Json $body) -ContentType 'application/json;charset=utf-8'
$response_json = $response | ConvertTo-Json -Depth 10

echo $response_json 