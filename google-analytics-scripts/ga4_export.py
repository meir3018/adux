from google.analytics.data_v1beta import BetaAnalyticsDataClient
from google.analytics.data_v1beta.types import (
    DateRange,
    Dimension,
    Metric,
    RunReportRequest
)
import pandas as pd
import os
from datetime import date

# ========================
# CONFIG
# ========================
PROPERTY_ID = "518324114"
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "ga4_service_account.json"

TODAY = date.today().isoformat()
OUTPUT_DIR = "ga4_exports"
os.makedirs(OUTPUT_DIR, exist_ok=True)

client = BetaAnalyticsDataClient()

# ========================
# HELPER FUNCTION
# ========================
def run_report(name, dimensions, metrics):
    request = RunReportRequest(
        property=f"properties/{PROPERTY_ID}",
        date_ranges=[DateRange(start_date="30daysAgo", end_date="yesterday")],
        dimensions=[Dimension(name=d) for d in dimensions],
        metrics=[Metric(name=m) for m in metrics],
        limit=100000
    )

    response = client.run_report(request)

    rows = []
    for row in response.rows:
        rows.append(
            [d.value for d in row.dimension_values] +
            [m.value for m in row.metric_values]
        )

    df = pd.DataFrame(
        rows,
        columns=dimensions + metrics
    )

    filename = f"{OUTPUT_DIR}/{name}_{TODAY}.csv"
    df.to_csv(filename, index=False)
    print(f"✅ Exported {filename}")


# ========================
# REPORTS
# ========================

# 1. Traffic acquisition
run_report(
    "traffic_acquisition",
    dimensions=["sessionSource", "sessionMedium"],
    metrics=["sessions", "totalUsers", "engagementRate", "averageSessionDuration"]
)

# 2. Pages performance
run_report(
    "pages",
    dimensions=["pagePath"],
    metrics=["screenPageViews", "totalUsers", "averageSessionDuration", "engagementRate"]
)

# 3. Landing pages
run_report(
    "landing_pages",
    dimensions=["landingPage"],
    metrics=["sessions", "totalUsers", "engagementRate", "averageSessionDuration"]
)

# 4. Events (clicks, scrolls, etc.)
run_report(
    "events",
    dimensions=["eventName"],
    metrics=["eventCount"]
)
