Add-Type -AssemblyName System.Windows.Forms

$Battery = Get-WmiObject -Class Win32_Battery
$Charge = $Battery.EstimatedChargeRemaining
$Status = $Battery.BatteryStatus


# 1 = Discharging (unplugged), 2 = Charging (plugged in)

if ($Charge -lt 63 -and $Status -eq 1) {
    [System.Windows.Forms.MessageBox]::Show("Battery is at $Charge%. Please plug in the charger.","Plug In Warning")
}
elseif ($Charge -gt 84 -and $Status -eq 2) {
    [System.Windows.Forms.MessageBox]::Show("Battery is at $Charge%. Please unplug the charger.","Unplug Warning")
}
elseif ($Charge -ge 90) {
    [System.Windows.Forms.MessageBox]::Show("Test completed. Battery is at $Charge%.","Script Check")
}
